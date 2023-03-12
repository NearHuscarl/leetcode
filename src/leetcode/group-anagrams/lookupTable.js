/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const group = {};
  for (const word of strs) {
    const key = getFreqKey(word);

    if (!group[key]) {
      group[key] = [word];
    } else {
      group[key].push(word);
    }
  }

  return Object.values(group);
};

/**
 * @param {string} str
 * @return {string}
 */
function getFreqKey(str) {
  const freqArr = [];
  for (const chr of str) {
    const chrCode = chr.codePointAt(0);
    if (!freqArr[chrCode]) {
      freqArr[chrCode] = 0;
    }
    freqArr[chrCode]++;
  }
  return freqArr.join('_');
}
