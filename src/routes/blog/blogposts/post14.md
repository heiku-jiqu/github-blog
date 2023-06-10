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

## WHERE clause

`WHERE` clause are the main utiliser of indexes.

Some key points to effectively write `WHERE` clause:

- As much as possible, do not wrap indexed columns within functions, because optimiser treats these as black boxes.
- If functions are unavoidable, create a function based index.
- The order of columns in the index definition is very important. Choose an order that can be used as often as possible.
  - Queries can only use index when the `WHERE` clause contains "cumulation" of the index columns starting from the left. E.g. For index with (col1, col2, col3), `WHERE` clause with either col1, col1 + col2, or col1 + col2 + col3 can use the index, whereas all other predicates are unable to use the index due to how the underlying index keys are sorted.
- There are three different ways that the DB optimizer can use index predicates, with drastically different performance characteristics.
  1.  Index unique scan, where only tree traversal is necessary. This of course requires unique constraint to be in place. (Super fast)
  1.  Index range scan, where the DB will perform both tree traversal as well as follow leaf nodes to find all matching entires. (Good enough)
  1.  Table access by index ROWID, where the DB will follow the ROWID pointer to read the row, then perform the filter based on what is found in the row. (Can be dangerous as it depends on table size _not_ query size)

## JOIN operations

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
