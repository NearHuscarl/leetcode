import { TProblem } from "../../types/problem";

export const settings: TProblem = {
  id: "fibonacci-number",
  title: "Fibonacci Number",
  testCases: [{ n: 2 }, { n: 3 }, { n: 4 }],
  metaData: {
    name: "fib",
    params: [{ name: "n", type: "number" }],
    return: {
      type: "number",
    },
  },
  solutions: {
    dp: {
      id: "dp",
      name: "DP",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "n",
    },
    recursive: {
      id: "recursive",
      name: "Recursive",
      programCode: "",
      visualizerCode: "",
      timeComplexity: "2^n",
    },
  },
};
