import { queryLeetcode } from "./leetcode";

type TQueryLcProblemsProps = {
  limit: number;
};

export type TLcQuestion = {
  acRate: number;
  difficulty: "Easy" | "Medium" | "Hard";
  title: string;
  titleSlug: string;
  topicTags: {
    name: string;
    slug: string;
  }[];
};

type Response = Promise<{
  questions: TLcQuestion[];
  total: number;
}>;

export const queryLcProblems = async ({
  limit,
}: TQueryLcProblemsProps): Response => {
  const result = await queryLeetcode({
    query: `
query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  problemsetQuestionList: questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    total: totalNum
    questions: data {
      acRate
      difficulty
      title
      titleSlug
      topicTags {
        name
        slug
      }
    }
  }
}
`,
    variables: {
      categorySlug: "",
      skip: 0,
      limit,
      filters: {},
    },
  });

  return (result ?? ({} as any))?.data?.problemsetQuestionList;
};
