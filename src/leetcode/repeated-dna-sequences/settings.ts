import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'repeated-dna-sequences',
  neetcode: 'https://www.youtube.com/watch?v=FzTYfsmtOso',
  testCases: [
    {
      s: 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT',
    },
    {
      s: 'AAAAAAAAAAAAA',
    },
  ],
  metaData: {
    name: 'findRepeatedDnaSequences',
    params: [{ name: 's', type: 'string' }],
    return: {
      type: 'string[]',
    },
  },
  solutions: {
    set: {
      id: 'set',
      name: 'Set',
      programCode: '',
      visualizerCode: '',
      timeComplexity: '10n',
    },
  },
};
