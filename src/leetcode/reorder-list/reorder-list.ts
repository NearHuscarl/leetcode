// https://leetcode.com/problems/reorder-list

import {
  toLinkedList,
  logLinkedList,
  ListNode,
  getLinkedListVisualizer,
} from "../../helpers/linkedList";

const testCase1 = [1, 2, 3, 4];
const testCase2 = [1, 2, 3, 4, 5];

export const reorderList = () => {
  const head = toLinkedList(testCase2);
  _reorderList(head);
};

/**
 Do not return anything, modify head in-place instead.
 */
function _reorderList(head: ListNode<number> | null): void {
  const v = getLinkedListVisualizer(() => ({
    head,
    evenCur,
    oddCur,
    evenNext,
    oddNext,
    evenHead,
    oddHead,
  }));

  let evenHead = head;
  let oddHead = head?.next ?? null;
  var evenCur = evenHead;
  var oddCur = oddHead;

  while (true) {
    var evenNext = oddCur?.next ?? null;
    var oddNext = evenNext?.next ?? null;
    evenCur.next = evenNext;
    oddCur.next = oddNext;
    evenCur = evenNext;
    oddCur = oddNext;
    if (!oddCur?.next) {
      if (evenNext?.next) evenNext.next = null;
      break;
    }
  }

  let cur = evenHead;
  evenCur = evenHead;
  oddCur = oddHead;
  while (evenCur && oddCur) {
    oddCur = oddCur?.next ?? null;
    evenCur = evenCur.next;
  }
  console.log(evenHead, oddHead);
}
