import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'permutation-in-string',
  neetcode: 'https://www.youtube.com/watch?v=UbyhOgBN834',
  testCases: [
    {
      s1: 'ab',
      s2: 'eidbaooo',
    },
    {
      s1: 'ab',
      s2: 'eidboaoo',
    },
  ],
  metaData: {
    name: 'checkInclusion',
    params: [
      { name: 's1', type: 'string' },
      { name: 's2', type: 'string' },
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
