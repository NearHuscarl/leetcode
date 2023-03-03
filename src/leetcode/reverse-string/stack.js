/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const stack = [];

  while (s.length > 0) {
    stack.push(s.shift());
  }

  while (stack.length > 0) {
    s.push(stack.pop());
  }
};
