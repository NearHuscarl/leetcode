import { TProblem } from "../../types/problem";

export const settings: TProblem = {
  id: "palindrome-linked-list",
  title: "Palindrome Linked List",
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
