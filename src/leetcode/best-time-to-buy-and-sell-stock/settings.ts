import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'best-time-to-buy-and-sell-stock',
  neetcode: 'https://www.youtube.com/watch?v=1pkOgXD63yU',
  testCases: [
    {
      prices: [7, 1, 5, 3, 6, 4],
    },
    {
      prices: [7, 6, 4, 3, 1],
    },
  ],
  metaData: {
    name: 'maxProfit',
    params: [{ name: 'prices', type: 'number[]' }],
    return: {
      type: 'number',
    },
  },
  solutions: {
    slidingWindow: {
      id: 'slidingWindow',
      name: 'Sliding Window',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
