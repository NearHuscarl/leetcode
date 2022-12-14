function isPalindrome(s: string) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      const missingLeft = s.slice(0, left) + s.slice(left + 1);
      const missingRight = s.slice(0, right) + s.slice(right + 1);
      return isPalindrome(missingLeft) || isPalindrome(missingRight);
    }
    left++;
    right--;
  }

  return true;
}
