import {
  ListNode,
  logLinkedList,
  toLinkedList,
  getLinkedListVisualizer,
} from "../../helpers/linkedList";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export function _reverseList(
  head: ListNode<number> | null
): ListNode<number> | null {
  const v = getLinkedListVisualizer(() => ({
    head,
    left,
    cur,
    right,
  }));

  if (!head?.next) {
    return head;
  }

  let cur: ListNode<number> | null = head;
  let left: ListNode<number> | null = null;
  let right: ListNode<number> | null = cur.next;

  while (cur) {
    right = cur.next;
    cur.next = left;
    left = cur;
    cur = right;
  }

  return left;
}

export const reverseList = () => {
  const testCase1 = toLinkedList([1, 2, 3, 4, 5]);
  const head = _reverseList(testCase1);
  logLinkedList(head);
};
