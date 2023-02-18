import { TProblemSettings } from "../../types/problem";

export const settings: TProblemSettings = {
  id: "merge-two-sorted-lists",
  neetcode: "https://www.youtube.com/watch?v=XIdigk956u0",
  testCases: [
    {
      list1: [1, 2, 4],
      list2: [1, 3, 4],
    },
    {
      list1: [],
      list2: [],
    },
    {
      list1: [],
      list2: [0],
    },
  ],
  metaData: {
    name: "mergeTwoLists",
    params: [
      { name: "list1", type: "ListNode" },
      { name: "list2", type: "ListNode" },
    ],
    return: {
      type: "ListNode",
    },
  },
  solutions: {
    main: {
      id: "main",
      name: "Main",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "n1 + n2",
    },
  },
};
