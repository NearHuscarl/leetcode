/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const normalizedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = normalizedStr.length - 1;

  while (left < right) {
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
