---
title: Composable Pandas (or Not)
date: '2023-03-03'
---

# {title}

In this post, I explore possible ways to write Pandas code in hopes of makign Pandas code more readable, composable, reusable, and testable.

## Motivation

After using R's `dplyr` (and the entire `tidyverse` ecosystem) to manipulate dataframes for awhile, Panda's API feels clunky in comparison.
The main issue seems to be difficulty in chaining and composing operations.
This tends to cause Pandas code to go against good software design principles, because it is difficult to break down larger chain of operations and also difficult to stitch smaller operations together.
This has an added effect of making tests hard to write, as user written Pandas functions are often doing a lot of things at once.

## Concrete Example of the Issue

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
One would expect that since we are assigning a new **column** (i.e. a `Series`) called `new_col` on the LHS, the RHS' lambda input(s) should be of type `Series` as well. However this is not the case as the lambda function takes in a `DataFrame` as input, and expects a `Series` as output.

# .apply, .applymap, .map, .pipe ???

# Code examples

```python
df = pd.DataFrame({
	'name': ['a','b','c'],
	'age': [25, 30, 99]
})

def to_uppercase(col_name):
	return lambda dataframe: dataframe[col_name].map(lambda x: 'Using element wise map: ' + x.upper())

def series_transform_string(x: pd.Series) -> pd.Series:
    return 'Using vectorised pipe: ' + x.str.upper()

def to_uppercase2(col_name):
	return lambda dataframe: dataframe[col_name].pipe(series_transform_string)

df.assign(
	more_than_seventy = lambda d: d['age'].map(lambda age: True if age > 70 else False),
	uppercase_name = to_uppercase('name'),
    another_upper = to_uppercase2('name')
)
```
