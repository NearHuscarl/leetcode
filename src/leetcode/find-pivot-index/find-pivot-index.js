// O(n^2)
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const sum1 = nums.slice(0, i).reduce((a, c) => a + c, 0);
    const sum2 = nums.slice(i + 1).reduce((a, c) => a + c, 0);

    if (sum1 === sum2) {
      return i;
    }
  }

  return -1;
};

// O(n)
var pivotIndex = function (nums) {
  let sumLeft = 0;
  let sumRight = nums.slice(1).reduce((a, c) => a + c, 0);

  for (let i = 0; i < nums.length; i++) {
    if (sumLeft === sumRight) {
      return i;
    } else {
      sumLeft += nums[i];
      sumRight -= nums[i + 1] ?? 0;
    }
  }

  return -1;
};
