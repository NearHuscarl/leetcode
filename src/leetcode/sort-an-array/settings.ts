import { TProblemSettings } from "../../types/problem";

export const settings: TProblemSettings = {
  id: "sort-an-array",
  testCases: [
    { nums: [6, 2, 4, 1, 3] },
    { nums: [5, 1, 1, 2, 0, 0] },
    { nums: [20, 2, 9, 7, 12, 15, 1, 6, 8] },
  ],
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
