import { TProblemSettings } from "../../types/problem";

export const settings: TProblemSettings = {
  id: "binary-search",
  neetcode: "https://www.youtube.com/watch?v=s4DPM8ct1pI",
  testCases: [
    {
      nums: [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59],
      target: 37,
    },
    {
      nums: [1, 3, 5, 7, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59],
      target: 37,
    },
  ],
  metaData: {
    name: "search",
    params: [
      { name: "nums", type: "number[]" },
      { name: "target", type: "number" },
    ],
    return: {
      type: "number",
    },
  },
  solutions: {
    "binary-search": {
      id: "binary-search",
      name: "Binary Search",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "log(n)",
    },
  },
};
