import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'two-sum',
  neetcode: 'https://www.youtube.com/watch?v=KLlXCFG5TnA',
  testCases: [
    {
      nums: [2, 1, 6, 5, 3],
      target: 4,
    },
    {
      nums: [3, 2, 4],
      target: 6,
    },
  ],
  metaData: {
    name: 'twoSum',
    params: [
      { name: 'nums', type: 'number[]' },
      { name: 'target', type: 'number' },
    ],
    return: {
      type: 'number[]',
    },
  },
  solutions: {
    lookupTable: {
      id: 'lookupTable',
      name: 'Lookup Table',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
