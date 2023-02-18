import { TProblemSettings } from "../../types/problem";

export const settings: TProblemSettings = {
  id: "invert-binary-tree",
  neetcode: "https://www.youtube.com/watch?v=OnSn2XEQ4MY",
  testCases: [
    {
      root: [4, 2, 7, 1, 3, 6, 9],
    },
    {
      root: [2, 1, 3],
    },
    {
      root: [],
    },
  ],
  metaData: {
    name: "invertTree",
    params: [{ name: "root", type: "TreeNode" }],
    return: {
      type: "TreeNode",
    },
  },
  solutions: {
    main: {
      id: "main",
      name: "Main",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "n",
    },
  },
};
