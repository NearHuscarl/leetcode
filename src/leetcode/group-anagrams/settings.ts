import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'group-anagrams',
  neetcode: 'https://www.youtube.com/watch?v=vzdNOK2oB2E',
  testCases: [
    {
      strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    },
  ],
  metaData: {
    name: 'groupAnagrams',
    params: [{ name: 'strs', type: 'string[]' }],
    return: {
      type: 'string[][]',
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
