import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'longest-substring-without-repeating-characters',
  neetcode: 'https://www.youtube.com/watch?v=wiGpQwVHdE0',
  testCases: [
    {
      s: 'abcabcbb',
    },
    {
      s: 'bbbbb',
    },
    {
      s: 'pwwkew',
    },
  ],
  metaData: {
    name: 'lengthOfLongestSubstring',
    params: [{ name: 's', type: 'string' }],
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
