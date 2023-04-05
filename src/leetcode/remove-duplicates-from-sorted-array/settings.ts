import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'remove-duplicates-from-sorted-array',
  neetcode: 'https://www.youtube.com/watch?v=DEJAZBq0FDA',
  testCases: [
    {
      nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    },
  ],
  metaData: {
    name: 'removeDuplicates',
    params: [{ name: 'nums', type: 'number[]' }],
    return: {
      type: 'number',
    },
  },
  solutions: {
    twoPointers: {
      id: 'twoPointers',
      name: 'Two Pointers',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
