import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'island-perimeter',
  neetcode: 'https://www.youtube.com/watch?v=fISIuAFRM2s',
  testCases: [
    {
      grid: [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
      ],
    },
  ],
  metaData: {
    name: 'islandPerimeter',
    params: [{ name: 'grid', type: 'number[][]' }],
    return: {
      type: 'number',
    },
  },
  solutions: {
    dfs: {
      id: 'dfs',
      name: 'Depth-First Search',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n * m',
    },
  },
};
