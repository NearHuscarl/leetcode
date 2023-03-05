/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indexLookup = {};
  for (let i = 0; i < nums.length; i++) {
    const subtracted = target - nums[i];
    if (indexLookup[subtracted] !== undefined) {
      return [indexLookup[subtracted], i];
    } else {
      indexLookup[nums[i]] = i;
    }
  }
};
