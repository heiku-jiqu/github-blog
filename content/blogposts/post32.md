+++
date = '2026-09-14T17:15:59+08:00'
title = 'Another Way to Implement State Machine'
tags = ["state machine"]
+++

# State Machine using Functions

Whilst reading go's `text/template` lexer, I realised the lexer implemented state machine in an interesting way. 

Instead of usual concrete struct/class implementations that satisfies the interface, everything is collapsed into a function that returns the next function for state transition. 

This implementation also looks like it has some coroutine characteristics,
where it emits results periodically to the caller, but the caller can continue progressing.

```go
type State struct{
	a int
	b int
	Result string
}

// a transition function that mutates state, and then returns 
// another transition function (or nil)
// concrete implementations will mutate *state
type transitionFn func(*state) transitionFn

// Function to start or continue transition-ing the state machine
func (s *state) Progress() string {
  transition = transitionX // start/continue with transitionX by default
  if s.a + s.b > 10 { // some custom logic to change continuation logic
  	transition = transitionY
  }
  for {
    transition = transition(s)
    // transitionFn decides when to return Result by returning nil
    if transition == nil { 
      return s.Result
    }
  } 
}

func transitionX(s *state)->transitionFn {
  if s.a == 1 {
    return transitionY 
  }
  return transitionZ
}
func transitionY(s *state)->transitionFn {
  if s.b == 2 {
    s.Result = "y end"
    return nil
  }
  return transitionZ
}
func transitionZ(s *state)->transitionFn {
  s.Result = "z end"
  return nil
}

func main() {
	s := State{a:1, b:3} // create new mutable state
	s.Progress()
	s.Result
	s.Progress()
	s.result
}
```

# Resources

- https://github.com/golang/go/blob/55d79d1e8a767e05e85f71c5e78a94b2ceaa67a5/src/text/template/parse/lex.go
- https://www.youtube.com/watch?v=HxaD_trXwRE
