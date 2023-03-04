/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const results = [];
  const stack = [];
  let node = root;

  while (true) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    if (stack.length === 0) {
      return results;
    }

    const n = stack.pop();
    results.push(n.val);
    node = n.right;
  }
};
