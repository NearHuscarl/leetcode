/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openParenLookup = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const chr of s) {
    if (openParenLookup[chr]) {
      if (stack[stack.length - 1] === openParenLookup[chr]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(chr);
    }
  }

  return stack.length === 0;
};
