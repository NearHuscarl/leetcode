import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'evaluate-reverse-polish-notation',
  neetcode: 'https://www.youtube.com/watch?v=ypn0aZ0nrL4',
  testCases: [
    {
      tokens: [
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ],
    },
    {
      tokens: ['4', '13', '5', '/', '+'],
    },
    {
      tokens: ['2', '1', '+', '3', '*'],
    },
  ],
  metaData: {
    name: 'evalRPN',
    params: [{ name: 'tokens', type: 'string[]' }],
    return: {
      type: 'number',
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
