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

  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
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
