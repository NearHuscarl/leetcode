/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const cachedSeqs = new Set();
  const duplicatedSeqs = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    const subStr = s.substring(i, i + 10);

    if (cachedSeqs.has(subStr)) {
      duplicatedSeqs.add(subStr);
    }

    cachedSeqs.add(subStr);
  }

  return [...duplicatedSeqs];
};
