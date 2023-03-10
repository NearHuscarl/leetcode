import { TProblemSettings } from '../../types/problem';

export const settings: TProblemSettings = {
  id: 'asteroid-collision',
  neetcode: 'https://www.youtube.com/watch?v=LN7KjRszjk4',
  testCases: [
    {
      asteroids: [10, 3, 7, 2, -5, -6, 1, 3, -7, -15],
    },
    {
      asteroids: [-1, 3, 2, -3],
    },
  ],
  metaData: {
    name: 'asteroidCollision',
    params: [{ name: 'asteroids', type: 'number[]' }],
    return: {
      type: 'number[]',
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
