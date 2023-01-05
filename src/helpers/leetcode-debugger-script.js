// ==UserScript==
// @name         Leetcode Javascript Debugger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Debug leetcode problems right inside your browser!
// @author       NearHuscarl
// @match        https://leetcode.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.com
// @grant        unsafeWindow
// ==/UserScript==

unsafeWindow.on = true;
// unsafeWindow.jQuery = window.jQuery;

(async function () {
  "use strict";

  // https://stackoverflow.com/a/37798293/9449426
  const whenDOMContentLoaded = (cb) => {
    if (
      document.readyState === "complete" ||
      document.readyState === "loaded" ||
      document.readyState === "interactive"
    ) {
      cb();
    } else {
      document.addEventListener("DOMContentLoaded", cb);
    }
  };

  function queryGraphQL({ query, variables = {}, ...rest }) {
    return fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables, ...rest }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Failed to query GraphQL. HTTP " + r.status);
        }
      })
      .catch((e) => console.log(e));
  }

  function queryQuestion(titleSlug) {
    return queryGraphQL({
      operationName: "questionTitle",
      query:
        "\n    query questionTitle($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    title\n    titleSlug\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n  }\n}\n    ",
      variables: { titleSlug },
    }).then((r) => r.data.question);
  }

  function queryQuestionEditorData(titleSlug) {
    return queryGraphQL({
      query:
        "\n    query questionEditorData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    codeSnippets {\n      lang\n      langSlug\n      code\n    }\n    envInfo\n    enableRunCode\n  }\n}\n    ",
      variables: { titleSlug },
    }).then((r) => r.data.question.codeSnippets);
  }

  function queryActiveSessionId() {
    return queryGraphQL({
      query:
        "\n    query globalData {\n  userStatus {\n    userId\n    isSignedIn\n    isMockUser\n    isPremium\n    isVerified\n    username\n    avatar\n    isAdmin\n    isSuperuser\n    permissions\n    isTranslator\n    activeSessionId\n    checkedInToday\n    notificationStatus {\n      lastModified\n      numUnread\n    }\n  }\n}\n    ",
      variables: {},
    }).then((r) => r.data.userStatus.activeSessionId);
  }

  const langSlug = "javascript";
  const titleSlug = location.pathname.replace(
    /\/problems\/([a-z-]*)\/.*/,
    "$1"
  );
  const [question, sessionId, codeSnippets] = await Promise.all([
    queryQuestion(titleSlug),
    queryActiveSessionId(),
    queryQuestionEditorData(titleSlug),
  ]);
  const codeSnippet = codeSnippets.find((s) => s.langSlug === langSlug).code;

  whenDOMContentLoaded(() => {
    console.log("run code");
    const runBtn = [...document.getElementsByTagName("button")].find(
      (b) => b.textContent === "Run"
    );
    const debugBtn = document.createElement("button");
    const container = runBtn.parentNode;

    debugBtn.textContent = "Debug";
    debugBtn.classList = runBtn.classList;
    container.insertBefore(debugBtn, container.firstChild);

    debugBtn.addEventListener("click", () => {
      try {
        const lines = getCode().split("\n");
        const breakpointLines = getBreakpointLines();

        breakpointLines.map((breakpoint, i) =>
          lines.splice(breakpoint + i - 1, 0, "debugger;")
        );
        unsafeWindow.eval(lines.join("\n"));
      } catch (err) {
        console.log({ err });
      }
    });
  });

  function getBreakpointLines() {
    return [...document.getElementsByClassName("cgmr")].map((el) =>
      parseInt(el.nextSibling.textContent, 10)
    );
  }

  function getCode() {
    let code =
      localStorage.getItem(`${question.questionId}_${sessionId}_${langSlug}`) ??
      codeSnippet;
    // remove quotes and literal newlines
    code = code.slice(1, code.length - 1).replace(/\\n/g, "\n");
    const testCaseParams = getTestCaseParams()
      .map((p) => p.value)
      .join(",");
    const fnName = code.match(/\nvar (\w+) /)[1];
    code += `
${fnName}(${testCaseParams});
        `;
    return code;
  }

  function getTestCaseParamsFromResultTab() {
    return [...document.querySelectorAll(".font-menlo.text-label-1")]
      .map((el) => {
        return {
          name: el.parentNode.firstChild.textContent.split(" =")[0],
          value: el.textContent,
        };
      })
      .filter((el) => !!el.name);
  }

  function getTestCaseParams() {
    const testCases = getTestCaseParamsFromResultTab();
    if (testCases.length > 0) {
      return testCases;
    }
    return [...document.querySelectorAll('[placeholder="Enter Testcase"]')].map(
      (el) => {
        return {
          name: el.parentNode.parentNode.firstChild.textContent.split(" =")[0],
          value: el.textContent,
        };
      }
    );
  }

  unsafeWindow.LC_DEBUGGER = {
    getCode,
    getBreakpointLines,
    getTestCaseParams,
    codeSnippet,
  };
})();
