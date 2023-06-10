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
Each node is also connected to the next higher entry node and next lower entry node, giving it the ability to move up and down the index keys (double linked list).
This effectively makes the index entries and the index nodes all sorted.

**B-tree**
The B-tree forms the upper 'layers' of the index. Each leaf node's highest value will be connected to the node in the layer above.
The node in the layer above consists of the highest (index key) values of several child nodes; depending on the block size, it can store ~100 values.
This process is repeated until the tree like structure is formed.
The `B` stands for balanced, which means that the depth of the deepest node is at most 1 layer deeper than the rest.
The B-tree allows log(n) lookups, therefore traversing the tree is very fast.

## WHERE clause

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
