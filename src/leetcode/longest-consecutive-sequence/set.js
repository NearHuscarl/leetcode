/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const isStartOfSeq = !set.has(n - 1);

    if (isStartOfSeq) {
      let seqLength = 1;
      let seqItem = n;

      while (set.has(seqItem + 1)) {
        seqLength++;
        seqItem++;
      }
      max = Math.max(seqLength, max);
    }
  }

  return max;
};
