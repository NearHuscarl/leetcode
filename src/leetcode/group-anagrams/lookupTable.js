/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const group = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = _getFreqKey(word);

    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(word);
  }

  return Object.values(group);
};

/**
 * @param {string} str
 * @return {string}
 */
function _getFreqKey(str) {
  const freqArr = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    const chrCode = chr.codePointAt(0) - 97;
    if (!freqArr[chrCode]) {
      freqArr[chrCode] = 0;
    }
    freqArr[chrCode]++;
  }
  return freqArr.join(',');
}
