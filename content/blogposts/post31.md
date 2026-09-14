+++
date = '2026-09-13T12:51:10+08:00'
draft = true
title = 'Top Down Parsers'
summary = 'Parsing expressions using Pratt Parser'
tags = [""]
+++

# Background

Simple parsing of text/tokens into abstract syntax tree uses recursive descent algorithm. 
Recursive descent is top down and left-recursive, which will run into two problems:
first problem is it is hard to correctly parse expressions with non-prefix operators ([operator associativity](#operator-associativity)); 
second problem is it is hard to figure out which operations should be done first ([operator precedence](#operator-precedence)).

Pratt parsing allows top down parsers to account for both above problems. 
More specifically, below are the cool properties you get:
1. Top down single pass
1. Handles operator associativity
1. Handles operator precedence
1. Requires only 1 look ahead from the lexer
1. Simple (once you get the hang of it)

# The Trick(s)

1. Every operator has a precedence which determines how "far" right the RHS of the expression is 
  1. Precedence can be thought of as the binding power of the operator, literally meaning how powerful this operator can bind to the expressions relative to other operators. 
  1. Operator with higher binding power will has more "suction force" for the expressions adjacent to it, and so pulls those expressions away from operators with lower binding power.
  1. If next operator's precedence is lower, it means current token is the end of the RHS of current expression. 
  1. High precedence = return Expression node _earlier_ = less recursion = _nearer_ RHS = Expression node contains _longer sequences_
  1. Low precedence = return Expression node _later_ = more recursion = _further_ RHS = Expression node contains _shorter sequences_
1. Deal with prefix vs non-prefix operators differently
   1. Figure out whether current operator is prefix vs non-prefix by having a running `has_lhs` state
1. Injects a loop alongside the recursion

# Resources 
- https://tdop.github.io/ - Original Pratt Parsing paper
- https://www.journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/ - Prefix (`nud` null denotation) vs Non-prefix (`led` left denotation)
- https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html - Concept of Binding Power instead of Precedence
- https://eli.thegreenplace.net/2012/08/02/parsing-expressions-by-precedence-climbing - Precedence concept, simpler to understand first
- https://eli.thegreenplace.net/2010/01/02/top-down-operator-precedence-parsing - Pratt Parser
- https://eli.thegreenplace.net/2009/03/20/a-recursive-descent-parser-with-an-infix-expression-evaluator - Shunting Yard - Pratt Parser that uses stack instead of recursion
- https://www.oilshell.org/blog/2016/11/01.html

# Appendix

## Operator Associativity

`1 - 2 - 3` should be evaluated as `(1 - 2) - 3`.
`1 ^ 2 ^ 3` should be evaluated as `1 ^ (2 ^ 3)`.
but recursive descent by default parses it as `1 - (2 - 3)`,  which will give a totally different answer! 
Operators where the "invisible" brackets are placed starting from the left are called _left associative_.

## Operator Precedence

`1 - 2 * 3` should be evaluated as `1 - (2 * 3)` and not `(1 - 2) * 3`.

## Lexical vs Syntactic vs Semantic

1. Lexical - Are the *words/tokens* correct? E.g. python `def` is correct, `fn` is not
2. Syntactic - Are the tokens' *order* correct? E.g. `def func1(arg):` is correct,  `func1: def(arg1)` is wrong
3. Semantic - Are the *meaning* correct? E.g. type checking

## Unwinding precedence climbing pseudo code from Eli Bendersky's blogpost

The original psuedocode presented is like this:
```
compute_expr(min_prec):
  result = compute_atom()

  while cur token is a binary operator with precedence >= min_prec:
    prec, assoc = precedence and associativity of current token
    if assoc is left:
      next_min_prec = prec + 1 # continue capturing RHS only if higher precedence than current
    else:
      next_min_prec = prec # continue capturing RHS if equal or higher
    rhs = compute_expr(next_min_prec)
    result = compute operator(result, rhs)

  return result
```

I felt that at first it was confusing because next_min_prec is used to encode both 
precedence _and_ associativity. Hence I tried to untangle them in the next 2 versions, maybe the logic is more explicit.

```
compute_expr(prev_prec, prev_assoc):
  result = compute_atom()

  if cur token is not binary operator:
    return result

  if prev_assoc is left: 
    # Previous left association, capture only if HIGHER 
    while cur token precedence > prev_prec: # note the >, no =
      prec, assoc = precedence and associativity of current token
      rhs = compute_expr(prec, assoc)
      result = compute operator(result, rhs)
  else:
    # Starting no prev assoc or Prev right association  
    # keep capturing as long as SAME or HIGHER
    while cur token precedence >= prev_prec: # note the >=, with =
      prec, assoc = precedence and associativity of current token
      rhs = compute_expr(prec, assoc)
      result = compute operator(result, rhs)
  

  return result
```

```
compute_expr(prev_prec, prev_assoc):
  result = compute_atom()

  if cur token is not binary operator:
    return result

  while True: 
    prec, assoc = precedence and associativity of current token

    # return node early:
    if prev_assoc is left and prec <= prev_prec:
      break 
    if prev_assoc is not left and prec < prev_prec:
      break

    # capture more RHS:
    # prev_assoc left + higher precedence
    # prev_assoc right + equal OR higher precedence
    rhs = compute_expr(prec, assoc)
    result = compute operator(result, rhs)

  return result
```

Surprisingly, after writing this version and then going back to later parts of his blogpost, this version looked similar to his actual implementation of `compute_expr`.

## Associativity

Loop produces Left associativity by default, 
builds tree by adding new tokens to the top
```
1 + 2 + 3
(1 + 2) + 3
    +
   / \
  +   3
 / \
1   2   
LEFT(LEFT(1,2) 3)
```

Recursive Descent produces Right associativity by default, 
builds tree by adding new tokens to the bottom
```
1 ^ 2 ^ 3
1 ^ (2 ^ 3)
  ^
 / \
1   ^   
   / \
  2   3   
RIGHT(1, RIGHT(2, 3))
```

Combine loop and recursion to Dynamically switch between both:
```
def parse_exp(tokenizer, prev_is_left):
  curr = tokenizer.consume() # base case output

  while True: # Loop: handles left-assoc
    next_token = tokenizer.consume()
    if (
      # check if we are in base case (applies to both loop & recursion)
      next_token is not operator or 
      prev_is_left
    ): 
      break # we are in base case, so don't do anything
    operator = next_token # rename to operator for clarity
    rhs = parse_exp(tokenizer, operator.is_left) # Recursion: handles right-assoc; parse_exp early returns next token when operator.is_left
    curr = operator(curr, rhs) # build the AST segment
    
  return curr
```

## Every step you know LHS

every step you know LHS, you are trying to place the next token.
the token can be placed above current tree or below current tree

## Associativity as a special case of precedence?
