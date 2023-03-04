import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'valid-parentheses',
  neetcode: 'https://www.youtube.com/watch?v=WTzjTskDFMg',
  testCases: [
    {
      s: '{[()]}',
    },
    {
      s: '()[]{}',
    },
    {
      s: '([)]',
    },
  ],
  metaData: {
    name: 'isValid',
    params: [{ name: 's', type: 'string' }],
    return: {
      type: 'boolean',
    },
  },
  solutions: {
    stack: {
      id: 'stack',
      name: 'Stack',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
