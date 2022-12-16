function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[right] < prices[left]) {
      left = right;
    }
    right++;
  }

  return maxProfit;
}
