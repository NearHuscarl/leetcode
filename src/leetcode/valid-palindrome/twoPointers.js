/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const validStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = validStr.length - 1;

  while (left < right) {
    if (validStr[left] !== validStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
