---
title: unittest-ing with Python
date: '2023-02-22'
---

# {title}

Tests are important to prove the logic you have written down works as expected,
and to squash bugs forever.
On top of this, practicing Test Driven Development (TDD), which is the act of writing tests
BEFORE implementation, helps you improve software design.
TDD forces you to think about how to test your implementation,
and through this, you are more likely to come up with
simpler APIs/methods/functions that do only one thing.

Python comes with `unittest` module in standard library that helps you write tests.

The basic flow of writing tests in `unittest` can be summarised as:

    1. import `unittest`
    1. create a test class that inherits from `unittest.TestCase`
    1. create methods in this test class that tests a functionality through `unittest.TestCase.assert*` methods
    1. run your tests through `python -m unittest <module_or_filepath>`

## Example Code:

```py
from unittest import TestCase
from math import sqrt

# implementation that you want to test
class MyCustomVector():
	x: int
	y: int

	def __init__(self, x:int, y:int):
		self.x = x
		self.y = y

	def l1_norm(self) -> int:
		return abs(self.x) + abs(self.y)

	def l2_norm(self) -> float:
		return sqrt(self.x ** 2 + self.y ** 2)

# test class that will run your tests
# inherit from unittest.TestCase
class TestSomeBehaviors(TestCase):
	# setting up test data/fixtures to be reused in all test cases
	# within this test class
	def setUp():
		self.input1 = MyCustomVector(1,2)
		self.input2 = MyCustomVector(-1,3)

	def test_l1_norm():
		# TestCase provides assert*() methods to use in tests
		self.assertEqual(
			self.input1.l1_norm(),
			3,
			'l1 norm should be sum of absolute values'
		)

	def test_l2_norm():
		self.assertEqual(
			self.input1.l1_norm(),
			sqrt(5),
			'l2 norm should be sqrt of sum of squares'
		)

	def tearDown():
		# tear down test fixtures
		# useful to reverse any side effects (e.g. temp files, temp db)
		pass
```
