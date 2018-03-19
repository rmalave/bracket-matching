# Whiteboard challenge: Bracket mathing

Write a function called `isBalanced` that accepts a string of left and right brackets and returns true if the brackets are balanced.

Use a stack!
Push whenever you see an opening curly brace.
Pop whenever you see a closing curly brace.
If you see a closing curly brace when the stack is empty, that's an error.

* `""` return `true`
* `"{"` return `false`
* `"}"` return `false`
* `"{}"` return `true`
* `"}{"` return `false`
* `"{{}}"` return `true`

let stack = [];
