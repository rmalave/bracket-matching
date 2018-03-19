'use strict';

function isBalanced(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0 && str[i] === "}") {
      return false;
    }

    if (str[i] === '{') {
      stack.push(str[i]);
    }

    if (str[i] === '}') {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
}

module.exports = isBalanced;
