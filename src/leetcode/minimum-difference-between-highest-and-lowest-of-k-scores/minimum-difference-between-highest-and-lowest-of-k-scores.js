/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let minScore = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = Math.min(k - 1, nums.length - 1);

  while (right < nums.length) {
    if (nums[right] - nums[left] < minScore) {
      minScore = nums[right] - nums[left];
    }
    left++;
    right++;
  }

  return minScore;
};
