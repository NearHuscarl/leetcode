// https://leetcode.com/problems/palindrome-linked-list

// Space complexity: O(n)
// Time complexity: O(n)
var isPalindrome = function (head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// Space complexity: O(1)
// Time complexity: O(n)
const reverseLinkedList = (head) => {
  let left = null;
  let cur = head;

  while (cur) {
    let right = cur.next;
    cur.next = left;
    left = cur;
    cur = right;
  }

  return left;
};

var isPalindrome = function (head) {
  let slowCur = head;
  let fastCur = head;

  while (fastCur.next && fastCur.next.next) {
    fastCur = fastCur.next.next;
    slowCur = slowCur.next;
  }

  let midCur = slowCur;
  let reversedHead = reverseLinkedList(midCur);

  while (head && reversedHead) {
    if (head.val !== reversedHead.val) {
      return false;
    }
    head = head.next;
    reversedHead = reversedHead.next;
  }

  return true;
};
