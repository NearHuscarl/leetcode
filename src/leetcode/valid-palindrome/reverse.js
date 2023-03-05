/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const arr1 = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('');
  const arr2 = arr1.slice();

  arr2.reverse();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
