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

**Index access patterns**
There are three different ways that the DB optimizer can use index predicates, with drastically different performance characteristics.

1.  Index unique scan, where only tree traversal is necessary. This of course requires unique constraint to be in place. (Super fast)
1.  Index range scan, where the DB will perform both tree traversal as well as follow leaf nodes to find all matching entires. (Good enough)
1.  Table access by index ROWID, where the DB will follow the ROWID pointer to read the row, then perform the filter based on what is found in the row. (Can be dangerous as it depends on table size _not_ query size)

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

## ORDER BY and GROUP BY

## Data Clustering

## Partial Results

## INSERT, DELETE, UPDATE

Code:

```css
.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
}
```

## Heading 2

The quick brown fox jumps over the lazy dog.

**Pipelining**

**Clustering Factor**

**Covering Index**

**Prepared Statements/Bind Parameters**
