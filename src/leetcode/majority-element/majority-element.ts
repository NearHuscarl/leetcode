// https://leetcode.com/problems/majority-element

// time complexity: O(n)
// space complexity: O(n)
function majorityElement(nums: number[]): number {
  const freq: Record<number, number> = {};

  for (const n of nums) {
    freq[n] = (freq[n] ?? 0) + 1;
  }

  for (const n in freq) {
    if (freq[n] > nums.length / 2) {
      return parseInt(n, 10);
    }
  }
  return 0;
}

// time complexity: O(n)
// space complexity: O(1)
function majorityElement2(nums: number[]): number {
  let majorityValue = nums[0];
  let count = 0;

  for (const n of nums) {
    if (n === majorityValue) {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      majorityValue = n;
      count = 0;
    }
  }

  return majorityValue;
}
