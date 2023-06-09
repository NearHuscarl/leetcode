/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    let count = 1;

    while (nums[right] === nums[right + 1]) {
      count++;
      right++;
    }

    const leftMoves = Math.min(2, count);

    for (let i = 0; i < leftMoves; i++, left++) {
      nums[left] = nums[right];
    }

    right++;
  }

  return left;
};
