/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  const res = [];

  const backtrack = (openN, closedN) => {
    if (openN === closedN && closedN === n) {
      res.push(stack.join(''));
      return;
    }

    if (openN < n) {
      stack.push('(');
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(')');
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return res;
};
