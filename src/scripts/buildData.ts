import { promises as fs } from "fs";
import { TProblem, TProblemSummary } from "src/types/problem";

const leetcodePath = "./src/leetcode";

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

const writeList = (problems: TProblemSummary[]) => {
  return fs.writeFile(
    `./src/api/list/all.json`,
    JSON.stringify(problems, null, 2),
    "utf-8"
  );
};

const updateProblem = async (problemId: string) => {
  const settings = await getSettings(problemId);

  if (!settings) return;

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
  const problemIds = (await fs.readdir(leetcodePath, { withFileTypes: true }))
    .filter((file) => file.isDirectory())
    .map((file) => file.name);

  const settings = await Promise.all(problemIds.map(updateProblem));

  const problems = settings
    .filter(Boolean)
    .map((s) => ({ title: s!.title, id: s!.id }));
  await writeList(problems);
};

buildData();
