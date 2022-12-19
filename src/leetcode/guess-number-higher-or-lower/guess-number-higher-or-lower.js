// https://leetcode.com/problems/guess-number-higher-or-lower

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const myGuess = Math.floor(left + (right - left) / 2);
    if (guess(myGuess) > 0) {
      left = myGuess + 1;
    } else if (guess(myGuess) < 0) {
      right = myGuess - 1;
    } else {
      return myGuess;
    }
  }
};
