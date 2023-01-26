/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  if (!head) {
    return null;
  }

  let left = null;
  let cur = head;

  while (cur) {
    let right = cur.next;
    cur.next = left;
    left = cur;
    cur = right;
  }

  return left;
}
