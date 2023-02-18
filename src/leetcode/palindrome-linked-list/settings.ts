import { TProblemSettings } from "../../types/problem";

export const settings: TProblemSettings = {
  id: "palindrome-linked-list",
  neetcode: "https://www.youtube.com/watch?v=yOzXms1J6Nk",
  testCases: [
    {
      head: [1, 2, 2, 1],
    },
    {
      head: [1, 2],
    },
  ],
  metaData: {
    name: "isPalindrome",
    params: [{ name: "head", type: "ListNode" }],
    return: {
      type: "boolean",
    },
  },
  solutions: {
    array: {
      id: "array",
      name: "Array",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "n",
    },
  },
};
