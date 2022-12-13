function minCostClimbingStairs(cost: number[]): number {
  const cache = {};
  return Math.min(
    minCost(cost, cost.length - 1, cache),
    minCost(cost, cost.length - 2, cache)
  );
}

function minCost(cost: number[], i: number, cache: Record<number, number>) {
  if (i === 1 || i === 0) {
    return cost[i];
  } else if (cache[i]) {
    return cache[i];
  }

  cache[i] =
    cost[i] +
    Math.min(minCost(cost, i - 1, cache), minCost(cost, i - 2, cache));

  return cache[i];
}
