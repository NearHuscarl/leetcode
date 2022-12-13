// https://leetcode.com/problems/top-k-frequent-elements

function topKFrequent(nums: number[], k: number): number[] {
  const freq: Record<number, number> = {};

  for (const n of nums) {
    freq[n] = (freq[n] ?? 0) + 1;
  }

  const freq2Item = [];

  for (const n in freq) {
    const frequency = freq[n];
    if (!freq2Item[frequency]) {
      freq2Item[frequency] = [];
    }
    freq2Item[frequency].push(n);
  }

  const results: number[] = [];
  for (let i = freq2Item.length - 1; i >= 0; i--) {
    const frequency = freq2Item[i];
    if (!frequency) continue;
    for (const num of frequency) {
      results.push(num);
      if (results.length === k) {
        return results;
      }
    }
  }

  return results;
}
