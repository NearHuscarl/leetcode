import {
  createGraphFromPointers,
  markedGrid,
  tryEval,
} from "@hediet/debug-visualizer-data-extraction";
import keyBy from "lodash/keyBy";
import "../../helpers/init";
import {
  ListNode,
  logLinkedList,
  toLinkedList,
  getLinkedListVisualizer,
} from "../../helpers/linkedList";

// https://leetcode.com/problems/is-subsequence/
export function _isSubsequence(s: string, t: string): boolean {
  const roots = keyBy(
    t.split("").map((c, i) => ({ char: c, index: i })),
    (x) => x.char
  );
  const v = () => {
    return markedGrid(t.split(""), {});
  };
  const v2 = () => {
    return {
      ...markedGrid(s.split(""), { "^": cursor } as any),
    };
  };
  console.log(roots, v());

  let cursor = 0;
  for (const chr of t) {
    if (chr === s[cursor]) {
      cursor++;
    }
  }
  return s.length === cursor;
}

export const isSubsequence = () => {
  const testCase1 = ["abc", "ahbgdc"] as const;
  const head = _isSubsequence(...testCase1);
};
