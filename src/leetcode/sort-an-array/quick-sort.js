/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return quickSort(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function quickSort(nums, start, end) {
  if (end - start + 1 <= 1) {
    return nums;
  }

  const pivot = nums[end];
  let left = start;

  // Partition: elements smaller than the pivot on left side
  for (let i = start; i <= end; i++) {
    if (nums[i] < pivot) {
      _swap(nums, left, i);
      left++;
    }
  }

  // Move pivot in-between left & right sides
  nums[end] = nums[left];
  nums[left] = pivot;

  quickSort(nums, start, left - 1);
  quickSort(nums, left + 1, end);

  return nums;
}

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
function _swap(nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
