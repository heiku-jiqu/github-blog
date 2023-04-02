---
title: Writing File to In-Memory Buffer in Python
date: '2023-04-02'
---

# {title}

# tl;dr

Use `BytesIO()` file-like object and write bytes to this object.
When appending this data in `requests` library, remember to "reset" the cursor position of the object using `file.seek(0)` so that `file.read()` will return the written bytes.

# Background

When creating data pipelines, at the end you will usually want to write the processed data into a sink. Normally, the sink will be a file system, and supplying a path-like string to the API will suffice (e.g. `pandas.DataFrame.to_csv('/path/to/file.csv')`).
However, when you instead want to send this data through a HTTP POST method, it doesn't make sense to write the data to file system, then read back the data from file system and attach the data into your request.

# Solution

Luckily a simple solution is to use Python's built in `BytesIO` object, which is a file-like object that lets you write to in-memory buffer (aka RAM). You can pass in this file-like object to most API's writing to file system methods.

Usually, writing to file system goes something like this:

```py
with open('path/to/file', 'wb') as f:
	df.to_csv(f)
```

To write to to an in-memory buffer (aka your RAM), change to this:

```py
with io.BytesIO(mode='w') as f:
	df.to_csv(f)
```

## Note on reading after writing to BytesIO

When writing to `BytesIO`, there is an underlying cursor that gets shifted to the right for every byte written. This cursor is **not resetted** when you try to read from the object.

```py
f = BytesIO(mode='w'):
f.write(b"hello")
f.read() # returns empty string!
f.seek(0)
f.read() # returns 'hello'
```

Therefore, when attaching your `BytesIO` buffer to the `data` param of `requests.post()`, remember to `f.seek(0)` to reset the cursor position to the beginning.
