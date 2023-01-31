/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const results = new Array(arr.length);
  const maxLookup = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    maxLookup[i + 1] = Math.max(maxLookup[i + 2] ?? -1, arr[i + 1] ?? -1);
    results[i] = maxLookup[i + 1];
  }

  return results;
};
