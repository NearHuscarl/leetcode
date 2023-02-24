/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
    fastPointer = fastPointer?.next;
  }

  let reversedHead = _reverse(slowPointer);

  let cur1 = head;
  let cur2 = reversedHead;
  while (cur2) {
    if (cur1.val !== cur2.val) {
      return false;
    }

    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  return true;
};

function _reverse(head) {
  let cur = head;
  let left = null;

  while (cur) {
    let right = cur.next;
    cur.next = left;
    left = cur;
    cur = right;
  }

  return left;
}
