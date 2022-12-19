// Time Complexity:  1+2+...+k = N, then k(k+1) = 2N => k^2 = N => k = Sqrt(N)
var arrangeCoins = function (n) {
  let rowsCanBuild = 0;
  let coinsUsed = 0;

  while (coinsUsed <= n) {
    coinsUsed += ++rowsCanBuild;
  }

  return rowsCanBuild - 1;
};

// Time Complexity: O(log(n))
// https://www.youtube.com/watch?v=5rHz_6s2Buw
var arrangeCoins = function (n) {
  let left = 0;
  let right = n;
  let mid = -1;
  let maxRowsCanBuild = 0;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    const coinsNeeded = (mid / 2) * (mid + 1);
    if (coinsNeeded > n) {
      right = mid - 1;
    } else if (coinsNeeded < n) {
      left = mid + 1;
      maxRowsCanBuild = Math.max(maxRowsCanBuild, mid);
    } else {
      return mid;
    }
  }

  return maxRowsCanBuild;
};
