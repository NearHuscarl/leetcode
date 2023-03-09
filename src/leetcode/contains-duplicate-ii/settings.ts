import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'contains-duplicate-ii',
  neetcode: 'https://www.youtube.com/watch?v=ypn0aZ0nrL4',
  testCases: [
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 4],
      k: 4,
    },
    {
      nums: [1, 2, 3, 4, 5, 1, 2, 3],
      k: 2,
    },
  ],
  metaData: {
    name: 'containsNearbyDuplicate',
    params: [
      { name: 'nums', type: 'number[]' },
      { name: 'k', type: 'number' },
    ],
    return: {
      type: 'boolean',
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
