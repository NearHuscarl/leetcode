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
  const openParens = new Set(Object.values(openParenLookup));

  for (const chr of s) {
    if (openParens.has(chr)) {
      stack.push(chr);
    } else {
      if (stack[stack.length - 1] === openParenLookup[chr]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
