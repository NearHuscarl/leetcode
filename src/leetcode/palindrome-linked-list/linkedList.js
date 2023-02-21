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
    fastPointer = fastPointer.next?.next;
  }

  let reversedHead = reverse(slowPointer);

  while (reversedHead) {
    if (head.val !== reversedHead.val) {
      return false;
    }

    head = head.next;
    reversedHead = reversedHead.next;
  }

  return true;
};

function reverse(head) {
  let cur = head;
  let left;

  while (cur) {
    let right = cur.next;
    cur.next = left;
    left = cur;
    cur = right;
  }

  return left;
}
