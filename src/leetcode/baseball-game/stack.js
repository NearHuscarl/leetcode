/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (op === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === 'C') {
      stack.pop();
    } else {
      stack.push(parseInt(op, 10));
    }
  }

  return stack.reduce((a, c) => a + c, 0);
};
