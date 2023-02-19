/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];

  for (const op of operations) {
    switch (op) {
      case "+":
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      case "D":
        stack.push(stack[stack.length - 1] * 2);
        break;
      case "C":
        stack.pop();
        break;
      default:
        stack.push(parseInt(op, 10));
        break;
    }
  }

  return stack.reduce((a, c) => a + c, 0);
};
