---
title: Database Indexes
date: '2023-06-07'
---

# {title}

Recently read an extremely informative e-book on database indexing over at [use-the-index-luke](https://use-the-index-luke.com/).
This post is to synthesise and summarise the main learnings that I took away from the ~200 page e-book.

# The Three Powers of Indexing

1. B-Tree Traversal
1. Data Clustering
1. Pipelined Sorting

## Data Structures Underlying the Index

**Redundant/Duplicated Data**

An index is (usually) a separate data structure maintained by the database.
In other words, it is redundant data that is stored/managed on top of the actual data that is stored/managed in your table.
An index is powered by two key data structures: Doubly Linked List and B-Tree.
One node corresponds to one database block.

**Database block / Database page**

A database block or page is the smallest (size) unit of operation, usually about 4 kilobytes in size.
The data in one block is physically arranged in a _contiguous_ block of memory.
One block can usually store multiple rows of the table data, or multiple index entries.
This means that in order to read a single row within a block that contains multiple rows, the database will have to read the entire block.

**Doubly Linked List**

The doubly linked lists' nodes are actually the leaf nodes for the B-tree.
Each node has multiple index entries, sorted by the index key.
Each entry in the node will store the index key(s) and also a pointer (ROWID) to the corresponding (physical) location of the data row.
Each node is also connected to the next higher entry (leaf) node and next lower (leaf) entry node, giving it the ability to move up and down the index keys in all the leaf nodes (double linked list).
This effectively makes the index entries and the index nodes all sorted.

The important thing to note here is that accessing all ROWID rows contained in one single index node is most likely a **random operation** because row data is stored in the heap and there are no guarantees that it is ordered.
This is further exacerbated by having to read the ROWIDs sequentially as they appear and also having to access row data _in blocks_.
The implication is that scanning through the ROWIDs could mean _accessing the same blocks multiple times_ to read different rows in the same block, effectively making using the index _slower_ than a full etable scan!
Of course, the database optimizer will try avoid this using its cost metrics and estimation.

**B-tree**

The B-tree forms the upper 'layers' of the index. Each leaf node's highest value will be connected to the node in the layer above.
The node in the layer above consists of the highest (index key) values of several child nodes; depending on the block size, it can store ~100 values.
This process is repeated for every branch layer until the tree like structure (root node) is formed.
The `B` stands for balanced, which means that the depth of the deepest node is at most 1 layer deeper than the rest.
The B-tree allows log(n) lookups, therefore traversing the tree is very fast.

**Types of Index Operations**

There are three different ways that the DB optimizer can use index predicates, with drastically different performance characteristics.

1.  Index unique scan, where only tree traversal is necessary. This of course requires unique constraint to be in place. (Super fast)
1.  Index range scan, where the DB will perform both tree traversal as well as follow leaf nodes to find all matching entires. Aka index access predicates (Good enough)
1.  Table access by index ROWID, where the DB will follow the ROWID pointer to read the row, then perform the filter based on what is found in the row. Aka index filter predicates. (Can be dangerous as it depends on table size _not_ query size)

## WHERE clause

`WHERE` clauses are the main utiliser of indexes.
The overarching theme and guideline here is to keep indexed columns as they are, and do functions/operations on the other side of the predicates.

Some key points to effectively write `WHERE` clause:

- As much as possible, do not wrap indexed columns within functions, because optimiser treats these as black boxes.
- If functions are unavoidable, create a function based index.
- The order of columns in the index definition is very important. Choose an order that can be used as often as possible.
  - Queries can only use index when the `WHERE` clause contains "cumulation" of the index columns starting from the left. E.g. For index with (col1, col2, col3), `WHERE` clause with either col1, col1 + col2, or col1 + col2 + col3 can use the index, whereas all other predicates are unable to use the index due to how the underlying index keys are sorted.
- When creating index, prioritise equality first then for range predicates.
- For `LIKE 'abc%xyz'` predicates, only the part infront of the `%` is used for access predicates.
- Avoid `LIKE` on date types as it internally applies `TO_STRING()` which obfuscates the index.
- When working with numeric strings, make sure to supply a string as predicate to avoid type conversion which obfuscates index (`WHERE string_col = 42` vs `WHERE string_col = "42"`).
- Combining columns also obfuscates index (e.g. filtering on date_column + time_column).
  - If possible, add combined column into table and index
  - If not possible, use "redundant" predicate on a single column so that predicate can take advantage of the index (e.g. `WHERE ADDTIME(date_col, time_col) > DATEADD(now(), INTERVAL '1 day') AND date_col >= DATE(DATE_ADD(now(), INTERVAL '1 day'))`, the second predicate is redundant but able to use index on date_col).
- Partial indexing (indexing only certain rows) may be useful on certain workloads to reduce index size and improve update performance on non-indexed rows.
- When index causes problems for a particular query,

## JOIN operations

JOINs in databases are done 2 tables at a time. If multiple JOINs are needed then DB will do it recursively 2 tables at a time.
This means the optimiser has to evaluate the `n!` join order permutations to come up with the best execution plan.
Therefore, the more complex the query, the more important using prepared statements become.

There are 3 types of `JOIN` algorithms:

**Nested Loop Join**

Nested loop join operates like a nested for loop: for each join key in table 1, find the corresponding key in table 2.
To improve performance, index the join key columns.
This algorithm is performant when rows returned by the 'outer loop' is low.

**Hash Join**

Hash join operates by loading all the keys (and rows) of one table in-memory, so that the other table can keep looking up the corresponding join key.
Indexing join key columns for this algorithm is useless as the keys are already in-memory!
Hence, it is better to index the independent `WHERE` clause to improve performance.
Another way to improve hash join performance is to reduce the memory footprint of the hash table, this implies both selecting less rows _as well as less columns_.

**Sort Merge Join**

Sort merge join operates by combining 2 _sorted_ tables (like a zipper). It iteratively loads the smallest keys from the two tables and do a cartesian product on them.
Sort merge join can be sped up if the keys are presorted (from an index or from another sort operation in the query).

## Data Clustering

Besides enabling fast lookups, indexes provide data clustering.
Data clustering in this case means to store consecutively accessed data close to each other (physically) so that accessing them requires fewer IO operations.
Values that the query plan is interested in can be found on the index itself.
This is especially useful for two things: optimizing index filter predicates and enabling index only scans.

**Optimizing Index Filter Predicates**

If query is bottlenecked by table access by index ROWID => filter predicate, then adding those columns that appear in these filter predicate into the index will speed up the query, since the values can now be found in the index instead of having to access the table rows.
When doing this, remember to always prioritise optimising for index access predicates first (i.e. Btree traversal) before optimizing for index filter predicates!
Also, do extend the current index instead of creating a new index to minimise index maintenance effort.

**Enabling Index Only Scans**

This takes the above concept to the extreme, where all `SELECT`ed columns are added into the index so the query skips accessing the heap table entirely.
Note that performance improvement depends on number of accessed rows (more improvement when nrows is high) and the index clustering factor of the query without the index (more improvement when clustering factor was high).

**Index-Organized Tables aka Clustered Index**

Another way to achieve data clustering is to order the table physically by the index keys, called "Clustered Index" in MS SQL Server.
This have the benefit of enabling index only scans on all queries, but the drawback is that row access through secondary indexes require traversing the table tree (instead of just following the ROWID pointer).
A general guideline is that tables with one index benefit from being Index-Organized table, while tables with many indexes usually benefit from heap table.

## ORDER BY

As mentioned, indexes have pre-sorted data based on the index keys.
Hence, to optimize `ORDER BY` queries, add all sorting columns into index that is used by the `WHERE` clause.

Although adding `ASC`/`DESC` homogeneously to all sorting columns can take advantage of the same index (due to double linked list being able to traverse both directions),
_mixing `ASC` and `DESC` will prevent the use of the original index as it will result in a different in ordering between the query and index_.
For example, `ORDER BY date_col ASC, product_id ASC` and `ORDER BY date_col DESC, product_id DESC` can use the same index, but `ORDER BY date_col ASC, product_id DESC` will _not_ be able to use the same index!

It is also important to note that, for large queries, full table scan + sorting may actually be faster than accesing table rows through index due to the "random IO" nature of accessing table rows.

## GROUP BY

`GROUP BY` has 2 main algorithms: Hash Table algorithm and Sort/Group algorithm.
Hash Table algorithm stores a (temporary) hash table with grouping column as keys, then aggregates that inputs into this hash table.
Sort/Group algorithm sorts the inputs by grouping column, then aggregates the sorted input.

Notice that although both needs to materialise an intermediate state, but Hash Table's memory footprint is way smaller than Sort/Group's sorted input, therefore usually optimizer prefers Hash Table algo.

Only the Sort/Group algorithm can make use of index to optmize its performance, and the advantage it has over Hash Table algo is that it enables _pipelined execution_ of the query.

## Partial Results

## INSERT, DELETE, UPDATE

Since indexes are purely redundant/duplicate data that exists on top of the actual table's data, this requires compute time to keep both indexes and table in sync, as well as maintain the underlying index data structure.
Therefore, the performance of `INSERT`, `DELETE` and `UPDATE` all degrade proportionally to the number of indexes the table has.

For `INSERT`s, it is important to note that the _first index, i.e. going from 0 to 1 index, makes the greatest difference in performance_ (several orders of magnitude more degradation, compared to adding more indexes when you already have one).
This property can be useful when you are bulk loading large amounts of data, which you can temporarily drop the index to load much faster.

For `DELETE`s, the execution acts like `SELECT` with extra delete step at the end.
Hence `DELETE`ing a single row with no index does not gain the same speed up as `INSERT` (as it requires full table scan), but it may still make sense when `DELETE`ing many rows.

For `UPDATE`s, the execution acts like a `DELETE` + `INSERT` operation. The important thing about `UPDATE`s is that changed values/columns may not be present in all indexes, therefore it is important to only update the columns that needs updating.
This might not apply when writing the SQL manually, but when using ORM tools this could be a hidden performance trap if not careful.

## Glossary

**Pipelining**

Pipelining / Pipelined Execution is a way in which database executes the operations from the query plan.
Pipelined Execution works "row-by-row" and passes the row/tuple to the next operation immediately after the current operation is done.
Pipelined execution is advantageous because it reduces response time of your query, especially for `LIMIT` type queries.

This is in contrast to another way of execution (Materlisation Execution Model), which is to wait for the entire intermediate output to materialise, then pass on to the next operation.
A similar analogy is the difference between stream processing vs batch processing.

OLAP databases also take pipelining one step further and implements Vectorized Execution. In Vectorized Execution, instead of returning "row-by-row", the operator returns "batch-by-batch", i.e. small batches of rows instead of a single row.
This greatly reduces number of CPU cycles needed per operator, and also allows operators to take advantage of CPU's SIMD instructions (Single Instruction Multiple Data) to speed up the query.

**Clustering Factor**

Clustering factor is how correlated the sequence of the column's data values are to the sequence of their physical order.
In Oracle, the clustering factor value is _low_ when the sequences are correlated.
While in Postgres, they use actual Pearson correlation, so when value is 0 is totally uncorrelated and when value is 1 (or -1) they are totally correlated.

**Covering Index**

**Prepared Statements/Bind Parameters**
