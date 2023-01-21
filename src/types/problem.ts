export type TProblem = {
  id: string;
  title: string;
  testCases: Record<string, any>[];
  metaData: {
    name: string;
    params: { name: string; type: string }[];
    return: { type: string };
  };
  solutions: Record<
    string,
    {
      id: string;
      name: string;
      timeComplexity: string;
      programCode: string;
      visualizerCode: string;
    }
  >;
};

export type TProblemSummary = {
  id: string;
  title: string;
};
