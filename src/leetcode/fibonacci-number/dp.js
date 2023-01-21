/**
 * @param {number} n
 */
function fib(n) {
  return memoization(n);
}
/**
 * @param {number} n
 * @param {object} cache
 */
const memoization = (n, cache = {}) => {
  if (n === 1 || n === 0) {
    return n;
  }
  if (cache[n] !== undefined) {
    return cache[n];
  }
  cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);
  return cache[n];
};
