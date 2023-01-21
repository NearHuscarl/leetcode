import { TProblem } from "../../types/problem";

export const settings: TProblem = {
  id: "sort-an-array",
  title: "Sort an Array",
  testCases: [{ nums: [6, 2, 4, 1, 3] }, { nums: [5, 1, 1, 2, 0, 0] }],
  metaData: {
    name: "sortArray",
    params: [{ name: "nums", type: "number[]" }],
    return: {
      type: "number[]",
    },
  },
  solutions: {
    "quick-sort": {
      id: "quick-sort",
      name: "Quick Sort",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "n * log(n)",
    },
  },
};
