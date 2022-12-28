import { ListNode } from "../../helpers/linkedList";

// O(n)
function deleteDuplicates(
  head: ListNode<number> | null
): ListNode<number> | null {
  if (!head) {
    return head;
  }

  let cur: ListNode<number>["next"] = head;
  while (cur) {
    while (cur.next?.val === cur.val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }

  return head;
}

// O(n) (clearer IMO)
var deleteDuplicates2 = function (head) {
  if (!head) {
    return head;
  }

  let cur = head;

  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};

// O(2n) (intuitive solution, kinda brute force)
var deleteDuplicates3 = function (head) {
  const arr = new Set();

  let cur = head;
  while (cur) {
    arr.add(cur.val);
    cur = cur.next;
  }

  cur = { val: NaN, next: null };
  head = cur;

  for (const n of arr) {
    cur.next = { val: n, next: null };
    cur = cur.next;
  }

  return head.next;
};
