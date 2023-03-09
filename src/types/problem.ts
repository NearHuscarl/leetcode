import { TLcQuestion } from 'src/scripts/queryProblems';

export type TProblemSettings = {
  id: string;
  neetcode?: string;
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

export type TProblem = TLcQuestion & TProblemSettings;

export type TProblemEntry = TLcQuestion & {
  neetcode?: string;
};
