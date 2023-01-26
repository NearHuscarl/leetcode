import { TProblem } from "../../types/problem";

export const settings: TProblem = {
  id: "reverse-list",
  title: "Reverse Linked List",
  testCases: [
    {
      head: [1, 2, 3, 4, 5],
    },
    {
      head: [1, 2],
    },
    {
      head: [],
    },
  ],
  metaData: {
    name: "reverseList",
    params: [{ name: "head", type: "ListNode" }],
    return: {
      type: "ListNode",
    },
  },
  solutions: {
    "reverse-list": {
      id: "reverse-list",
      name: "Reverse List",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "n",
    },
  },
};
