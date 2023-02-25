import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'binary-tree-inorder-traversal',
  neetcode: 'https://www.youtube.com/watch?v=g_S5WuasWUE',
  testCases: [
    {
      root: [1, null, 2, 3],
    },
    {
      root: [2, 4, 5, null, null, null, 1, null, 3, 6],
    },
    {
      root: [1],
    },
    {
      root: [1, 2, 3, 4, 5],
    },
  ],
  metaData: {
    name: 'inorderTraversal',
    params: [{ name: 'root', type: 'TreeNode' }],
    return: {
      type: 'number[]',
    },
  },
  solutions: {
    main: {
      id: 'main',
      name: 'Main',
      programCode: '',
      visualizerCode: '',
      timeComplexity: 'n',
    },
  },
};
