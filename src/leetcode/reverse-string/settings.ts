import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'reverse-string',
  neetcode: 'https://www.youtube.com/watch?v=_d0T_2Lk2qA',
  testCases: [
    {
      s: ['h', 'e', 'l', 'l', 'o'],
    },
    {
      s: ['H', 'a', 'n', 'n', 'a', 'h'],
    },
  ],
  metaData: {
    name: 'reverseString',
    params: [{ name: 's', type: 'string[]' }],
    return: {
      type: 'string[]',
    },
  },
  solutions: {
    twoPointers: {
      id: 'twoPointers',
      name: 'Two Pointers',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 's + t',
    },
  },
};
