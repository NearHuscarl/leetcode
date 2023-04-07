/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const merge = (nums, left, mid, right) => {
    let leftArr = nums.slice(left, mid + 1);
    let rightArr = nums.slice(mid + 1, right + 1);
    let l = 0;
    let r = 0;
    let i = left;

    while (l < leftArr.length && r < rightArr.length) {
      if (leftArr[l] <= rightArr[r]) {
        nums[i] = leftArr[l];
        l++;
      } else {
        nums[i] = rightArr[r];
        r++;
      }

      i++;
    }

    while (l < leftArr.length) {
      nums[i++] = leftArr[l++];
    }
    while (r < rightArr.length) {
      nums[i++] = rightArr[r++];
    }
  };

  const mergeSort = (nums, left, right) => {
    if (left === right) {
      return nums;
    }

    const mid = left + Math.floor((right - left) / 2);

    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);

    return nums;
  };

  return mergeSort(nums, 0, nums.length - 1);
};
