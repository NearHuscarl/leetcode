import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'valid-palindrome',
  neetcode: 'https://www.youtube.com/watch?v=jJXJ16kPFWg',
  testCases: [
    {
      s: 'race a car',
    },
    {
      s: 'A man, a plan, a canal: Panama',
    },
    {
      s: ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
    },
  ],
  metaData: {
    name: 'isPalindrome',
    params: [{ name: 's', type: 'string' }],
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
      timeComplexity: 'n',
    },
    reverse: {
      id: 'reverse',
      name: 'Reverse',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
