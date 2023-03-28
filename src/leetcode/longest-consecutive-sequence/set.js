/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (const item of nums) {
    const isStartOfSeq = !set.has(item - 1);

    if (isStartOfSeq) {
      let seqLength = 1;
      let seqItem = item;

      while (set.has(seqItem + 1)) {
        seqLength++;
        seqItem++;
      }
      max = Math.max(seqLength, max);
    }
  }

  return max;
};
