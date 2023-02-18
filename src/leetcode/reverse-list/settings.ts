import { TProblemSettings } from "../../types/problem";

export const settings: TProblemSettings = {
  id: "reverse-list",
  neetcode: "https://www.youtube.com/watch?v=G0_I-ZF0S38",
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
