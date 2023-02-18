import { promises as fs } from "fs";
import { TProblem, TProblemEntry } from "src/types/problem";
import { queryLcProblems, TLcQuestion } from "./queryLcProblems";

const leetcodePath = "./src/leetcode";

const getLcProblems = async () => {
  console.log("fetching LC problems...");
  const { questions, total } = await queryLcProblems({ limit: 3000 });
  console.log(`LC problems: ${total}`);

  await fs.writeFile(
    `./src/api/leetcode/problems.json`,
    JSON.stringify(questions, null, 2),
    "utf-8"
  );

  const problemLookup: Record<string, TLcQuestion> = {};

  for (const problem of questions) {
    problem.acRate = Math.round(problem.acRate * 10) / 10;
    problemLookup[problem.titleSlug] = problem;
  }

  return problemLookup;
};

const getCode = (problemId: string, solutionId: string) => {
  return Promise.all([
    fs.readFile(`${leetcodePath}/${problemId}/${solutionId}.js`, "utf-8"),
    fs.readFile(`${leetcodePath}/${problemId}/${solutionId}.tsx`, "utf-8"),
  ]);
};

const getSettings = async (problemId: string) => {
  try {
    const { settings } = await import(`../leetcode/${problemId}/settings`);
    return settings as TProblem;
  } catch (err) {
    // file not exists
    return;
  }
};

const writeProblem = (problem: TProblem) => {
  return fs.writeFile(
    `./src/api/problems/${problem.id}.json`,
    JSON.stringify(problem, null, 2),
    "utf-8"
  );
};

const writeList = (problems: TProblemEntry[]) => {
  return fs.writeFile(
    `./src/api/list/all.json`,
    JSON.stringify(problems, null, 2),
    "utf-8"
  );
};

const updateProblem = async (
  problemId: string,
  problemLookup: Record<string, TLcQuestion>
) => {
  const settings2 = await getSettings(problemId);
  if (!settings2) return;

  const settings = {
    ...settings2,
    ...problemLookup[problemId],
  };

  for (const solutionId in settings.solutions) {
    const [programCode, visualizerCode] = await getCode(problemId, solutionId);

    settings.solutions[solutionId].programCode = programCode;
    settings.solutions[solutionId].visualizerCode = visualizerCode;
  }

  console.log("update problem", settings.id);
  await writeProblem(settings);
  return settings;
};

const buildData = async () => {
  const lcProblems = await getLcProblems();
  const problemIds = (await fs.readdir(leetcodePath, { withFileTypes: true }))
    .filter((file) => file.isDirectory())
    .map((file) => file.name);

  const settings = await Promise.all(
    problemIds.map((id) => updateProblem(id, lcProblems))
  );

  const problems = settings
    .filter<TProblem>(Boolean as any)
    .map<TProblemEntry>((s) => ({ ...lcProblems[s.id], neetcode: s.neetcode }));
  await writeList(problems);
};

buildData();
