import { TProblem } from "../../types/problem";

export const settings: TProblem = {
  id: "valid-anagram",
  title: "Valid Anagram",
  testCases: [
    {
      s: "anagram",
      t: "nagaram",
    },
    {
      s: "rat",
      t: "car",
    },
  ],
  metaData: {
    name: "isAnagram",
    params: [
      { name: "s", type: "string" },
      { name: "t", type: "string" },
    ],
    return: {
      type: "boolean",
    },
  },
  solutions: {
    lookupTable: {
      id: "lookupTable",
      name: "Lookup Table",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "s + t",
    },
  },
};
