/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const strNums = nums.map(String);

  strNums.sort((a, b) => {
    const numStrA = a + b;
    const numStrB = b + a;
    if (numStrA > numStrB) {
      return -1;
    }
    return 1;
  });

  const largeNum = strNums.reduce((a, c) => a + c, '');

  return largeNum.split('').every((d) => d === '0') ? '0' : largeNum;
};
