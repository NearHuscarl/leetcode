/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < s.length; i++) {
    freq1[s[i]] = (freq1[s[i]] ?? 0) + 1;
    freq2[t[i]] = (freq2[t[i]] ?? 0) + 1;
  }

  for (const chr in freq1) {
    if (freq1[chr] !== freq2[chr]) {
      return false;
    }
  }
  return true;
};
