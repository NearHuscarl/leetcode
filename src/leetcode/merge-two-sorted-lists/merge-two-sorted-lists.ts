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

import { ListNode } from "../../helpers/linkedList";

export function mergeTwoLists(
  list1: ListNode<number> | null,
  list2: ListNode<number> | null
): ListNode<number> | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let head = list1;
  let cur1: ListNode<number> | null = list1;
  let cur2: ListNode<number> | null = list2;

  if (list1.val > list2.val) {
    head = list2;
    cur2 = list2.next;
  } else {
    cur1 = list1.next;
  }

  let cur = head;
  while (cur1 && cur2) {
    if (cur1.val < cur2.val) {
      cur.next = cur1;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur2 = cur2.next;
    }
    cur = cur.next;
  }

  if (cur1) cur.next = cur1;
  if (cur2) cur.next = cur2;

  return head;
}

function mergeTwoLists2(
  list1: ListNode<number> | null,
  list2: ListNode<number> | null
): ListNode<number> | null {
  const prefixNode = { next: null, val: 0 } as ListNode<number>;
  let cur1 = list1;
  let cur2 = list2;
  let cur = prefixNode;

  while (cur1 && cur2) {
    if (cur1.val < cur2.val) {
      cur.next = cur1;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur2 = cur2.next;
    }
    cur = cur.next;
  }

  if (cur1) cur.next = cur1;
  if (cur2) cur.next = cur2;

  return prefixNode.next;
}
