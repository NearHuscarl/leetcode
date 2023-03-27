import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'largest-number',
  neetcode: 'https://www.youtube.com/watch?v=WDx6Y4i4xJ8',
  testCases: [
    {
      nums: [3, 30, 34, 5, 9],
    },
    {
      nums: [10, 2],
    },
  ],
  metaData: {
    name: 'largestNumber',
    params: [{ name: 'nums', type: 'number[]' }],
    return: {
      type: 'string',
    },
  },
  solutions: {
    sort: {
      id: 'sort',
      name: 'Sort',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n * log(n)',
    },
  },
};
