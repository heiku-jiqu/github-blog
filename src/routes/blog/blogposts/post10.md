---
title: Composable Pandas
date: '2023-03-03'
---

# {title}

In this post, I explore possible ways to write Pandas code in hopes of makign Pandas code more readable, composable, reusable, and testable.

## motivation

After using R's `dplyr` (and the entire `tidyverse` ecosystem) to manipulate dataframes for awhile, Panda's API feels clunky in comparison.
The main issue seems to be difficulty in chaining and composing operations.
This tends to cause Pandas code to go against good software design principles, because it is difficult to break down larger chain of operations and also difficult to stitch smaller operations together.
This has an added effect of making tests hard to write, as user written Pandas functions are often doing a lot of things at once.

## Concrete example of the issue

```py
df = pd.DataFrame({
	'name': ['a','b','c'],
	'age': [25, 30, 99]
})
```

A common way to filter the rows of dataframe is:

```py
df[df.age <=30]
```

And a common way to assign a new column to the dataframe is:

```py
df['new_col'] = df.age + 30
```

Now with the above two operations, how does one chain those two simple operations together?
We will probably have to keep assigning intermediate dataframe variables, which gets clunky after awhile:

```py
df2 = df[df.age <= 30] # does not change df in-place?
df2['new_col'] = df2.age + 30 # changes df2 in-place?
```

## .assign and .query

A more chainable way to do filters and add calculated columns is to use `.query()` and `.assign()` methods:

```py
df.query(
	'age <= 30'
).assign(
	new_col = lambda x: x['age'] + 20
).query(
	'new_col >= 50'
)
```

Even though this is better, there are still some drawbacks.
The first is `.query()` uses a query string and not native python code,
which means you lose all IDE auto complete capabilities _('what columns do my dataframe have again?')_.

The second is that using `assign` fixes the column names that the lambda function operates on,
unless you introduce another layer of abstraction to parameterise the lambda function.
This second point is important when you want to reuse this function across different dataframes.
This is seems to be caused by the next point.

The third point is the un-intuitiveness of the LHS and RHS of the expressions in `.assign()`'s arguments.
One would expect that since we are assigning a new **column** (i.e. a `Series`) called `new_col` on the LHS, the RHS' lambda input(s) should be of type `Series` as well.
This seems more intuitive because most operations are computations of one or more `Series` (e.g. total_sales_column = item_price_column \* quantity_sold_column).
However this is not the case as the lambda function takes in a `DataFrame` as input, and expects a `Series` as output.

# Chaining methods (.apply, .applymap, .map, .pipe)

There are a variety of (overlapping) chaining methods that we can use, which does not help with implementing chaining as it can be confusing to choose which methods to use.

## Chaining functions on DataFrames

When working with `DataFrames`, you have the option of `.pipe`, `.apply` and `.applymap` to chain functions, which is also unintuitive at first glance (which one should I use? they all look like they do the same thing!).

As a general rule of thumb:

- Default to using `.pipe`, so as to ease cognitive overhead in remembering which specific method to use. If pipe isn't suitable, try the below methods;
- Use `.applymap` when you need element-wise operation
- Use `.apply` when you need to operate on row-wise aggregations/Series

However, note that `.applymap` and `.apply` applies the function to ALL elements/columns/rows, and in order to operate only on certain columns, you would have to do `df['col'].applymap(my_func)`

## Chaining functions on Series

When working with `Series`, you have the option of `.pipe`, `.apply` and `.map`. Again, having multiple options that does _almost_ the same things can be very confusing.

As a general rule of thumb:

- Default to using `.pipe`, so as to ease cognitive overhead in remembering which specific method to use. If pipe isn't suitable, try the below methods;
- Use `.map` when you want to substitute elements using a dictionary (e.g. map 'A' to 1, 'B' to 2, etc.)
- Use `.apply` if you need to use Numpy functions

# Speed

Since most of these chaining methods uses _Python_'s for-loop in the background, it will NOT take advantage of the machine code vectorization that Pandas (and Numpy) has integrated into its normal 'unchained' API.
These vectorizations (e.g. `df['x'] / df['y']`) calls Numpy's underlying C code which helps to improve performance massively.
Hence there is a major trade off in writing (somewhat) more readable code, which is kind of disappointing as we have to trade off developer experience for runtime performance.

# Conclusion and alternatives

It does seem like it is very hard to shoe-horn dplyr's more intuitive API into pandas', as they are fundamentally designed very differently.

Some alternatives that have nicer APIs include R's [dplyr](https://dplyr.tidyverse.org/) as mentioned. If using python, there are also promising alternatives like [polars](https://www.pola.rs/) and [ibis](https://ibis-project.org/).

# Code examples

```python
df = pd.DataFrame({
	'name': ['a','b','c'],
	'age': [25, 30, 99]
})

# nest the lambdas so this funciton is usable within .assign()
def to_uppercase(col_name):
	return lambda dataframe: dataframe[col_name].pipe(lambda x: 'Using element wise map: ' + x.upper())

# abstract out inner function
# multiple inner functions can then be reused/chained
def series_transform_string(x: pd.Series) -> pd.Series:
    return 'Using vectorised pipe: ' + x.str.upper()

# similar as first example, but inner lambda is abstracted out
def to_uppercase2(col_name):
	return lambda dataframe: dataframe[col_name].pipe(series_transform_string)

df.assign(
	more_than_seventy = lambda d: d['age'].map(lambda age: True if age > 70 else False),
	uppercase_name = to_uppercase('name'),
    another_upper = to_uppercase2('name')
)
```
