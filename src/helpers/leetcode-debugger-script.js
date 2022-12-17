// ==UserScript==
// @name         Leetcode Free Javascripts Debugger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Debug leetcode problems right inside your browser!
// @author       NearHuscarl
// @match        https://leetcode.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.com
// @grant        unsafeWindow
// ==/UserScript==

unsafeWindow.on = true;

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

  function queryActiveSessionId() {
    return queryGraphQL({
      query:
        "\n    query globalData {\n  userStatus {\n    userId\n    isSignedIn\n    isMockUser\n    isPremium\n    isVerified\n    username\n    avatar\n    isAdmin\n    isSuperuser\n    permissions\n    isTranslator\n    activeSessionId\n    checkedInToday\n    notificationStatus {\n      lastModified\n      numUnread\n    }\n  }\n}\n    ",
      variables: {},
    }).then((r) => r.data.userStatus.activeSessionId);
  }

  const problemTitle = location.pathname.replace(
    /\/problems\/([a-z-]*)\/.*/,
    "$1"
  );
  const [question, sessionId] = await Promise.all([
    queryQuestion(problemTitle),
    queryActiveSessionId(),
  ]);

  whenDOMContentLoaded(() => {
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

        breakpointLines.map((breakpoint) =>
          lines.splice(breakpoint - 1, 0, "debugger;")
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
    const code = localStorage.getItem(
      `${question.questionFrontendId}_${sessionId}_javascript`
    );
    // remove quotes and literal newlines
    return code.slice(1, code.length - 1).replace(/\\n/g, "\n");
  }
})();
