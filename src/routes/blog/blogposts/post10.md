---
title: Composable Pandas
date: '2023-02-24'
---

# {title}

# Motivation

# .assign

# .pipe

# .map

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
