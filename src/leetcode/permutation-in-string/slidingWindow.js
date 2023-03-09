/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  const s1Freq = {};
  const s2Freq = {};
  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1[i]] = (s1Freq[s1[i]] ?? 0) + 1;
    s2Freq[s2[i]] = (s2Freq[s2[i]] ?? 0) + 1;
  }

  let left = 0;
  let right = s1.length - 1;

  while (right < s2.length) {
    if (_sameFreq(s1Freq, s2Freq)) {
      return true;
    }

    s2Freq[s2[left]] = s2Freq[s2[left]] - 1;
    left++;
    right++;
    s2Freq[s2[right]] = (s2Freq[s2[right]] ?? 0) + 1;
  }

  return false;
};

const _sameFreq = (freq1, freq2) => {
  for (const prop in freq1) {
    if (freq1[prop] > 0 && freq1[prop] !== freq2[prop]) {
      return false;
    }
  }
  return true;
};
