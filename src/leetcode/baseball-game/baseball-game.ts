// https://leetcode.com/problems/baseball-game
function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (const operation of operations) {
    if (operation === "+") {
      const n1 = stack[stack.length - 1];
      const n2 = stack[stack.length - 2];
      stack.push(n1 + n2);
    } else if (operation === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operation === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(operation, 10));
    }
  }

  return stack.reduce((a, c) => a + c, 0);
}
