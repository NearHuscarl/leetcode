import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'baseball-game',
  neetcode: 'https://www.youtube.com/watch?v=Id_tqGdsZQI',
  testCases: [
    {
      operations: ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
    },
    {
      operations: ['5', '2', 'C', 'D', '+'],
    },
    {
      operations: ['1', 'C'],
    },
  ],
  metaData: {
    name: 'calPoints',
    params: [{ name: 'operations', type: 'string[]' }],
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
