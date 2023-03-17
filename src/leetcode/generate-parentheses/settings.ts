import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'generate-parentheses',
  neetcode: 'https://www.youtube.com/watch?v=s9fokUqJ76A',
  testCases: [
    {
      n: 3,
    },
    {
      n: 4,
    },
    {
      n: 2,
    },
  ],
  metaData: {
    name: 'generateParenthesis',
    params: [{ name: 'n', type: 'number' }],
    return: {
      type: 'string[]',
    },
  },
  solutions: {
    backtracking: {
      id: 'backtracking',
      name: 'Backtracking',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
