import { ListNode } from "../../helpers/linkedList";

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
