import {
  getDataExtractorApi,
  createGraphFromPointers,
} from "@hediet/debug-visualizer-data-extraction";

getDataExtractorApi().registerDefaultExtractors();

declare global {
  interface Object {
    getUniqueId(): number;
  }
}

// https://stackoverflow.com/a/2020890/9449426
(function () {
  var id = 0;

  function generateId() {
    return id++;
  }

  Object.prototype.getUniqueId = function () {
    var newId = generateId();

    this.getUniqueId = function () {
      return newId;
    };

    return newId;
  };
})();

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

export type ListNode<T> = {
  val: T;
  next: ListNode<T> | null;
};

export const toLinkedList = <T>(arr: T[]) => {
  return arr.reverse().reduce<ListNode<T>>((acc, cur) => {
    if (acc == null) {
      acc = { val: cur, next: null };
    } else {
      acc = { val: cur, next: acc };
    }
    return acc;
  }, null as any);
};

export const logLinkedList = <T>(head: ListNode<T> | null) => {
  if (!head) {
    console.log("<empty linked list>");
    return;
  }

  let str = head.val + "";
  while (head.next) {
    str += " -> " + head.next.val;
    head = head.next;
  }
  console.log(str);
};

export const getLinkedListVisualizer = <T>(
  roots: () => Record<string, ListNode<T> | null>
) => {
  return () => {
    return createGraphFromPointers(roots(), (i) => ({
      id: i.getUniqueId().toString(),
      label: (i.val as any).toString(),
      edges: [
        { to: i.next!, label: "next", color: "lightblue" },
        //   { to: i.prev!, label: "prev", color: "lightgray" },
      ].filter((r) => !!r.to),
    }));
  };
};
