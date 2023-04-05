/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 1;
  let right = 1;

  while (right <= nums.length - 1) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }

    right++;
  }

  return left;
};
