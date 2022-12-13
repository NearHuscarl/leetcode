function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set<number>();

  for (const n of nums) {
    if (!numSet.has(n)) {
      numSet.add(n);
    } else {
      return true;
    }
  }

  return false;
}
