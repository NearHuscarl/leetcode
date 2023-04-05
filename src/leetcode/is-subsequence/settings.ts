import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'is-subsequence',
  neetcode: 'https://www.youtube.com/watch?v=99RVfqklbCE',
  testCases: [
    {
      s: 'abc',
      t: 'ahbgdc',
    },
    {
      s: 'axc',
      t: 'ahbgdc',
    },
  ],
  metaData: {
    name: 'isSubsequence',
    params: [
      { name: 's', type: 'string' },
      { name: 't', type: 'string' },
    ],
    return: {
      type: 'boolean',
    },
  },
  solutions: {
    twoPointers: {
      id: 'twoPointers',
      name: 'Two Pointers',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 't',
    },
  },
};
