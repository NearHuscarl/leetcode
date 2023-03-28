import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'longest-consecutive-sequence',
  neetcode: 'https://www.youtube.com/watch?v=P6RZZMu_maU',
  testCases: [
    {
      nums: [100, 4, 200, 1, 3, 2],
    },
    {
      nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    },
  ],
  metaData: {
    name: 'longestConsecutive',
    params: [{ name: 'nums', type: 'number[]' }],
    return: {
      type: 'number',
    },
  },
  solutions: {
    set: {
      id: 'set',
      name: 'Set',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
