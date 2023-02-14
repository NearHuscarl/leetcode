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
  const array = [];
  let cur = head;

  while (cur) {
    array.push(cur.val);
    cur = cur.next;
  }

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] !== array[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
