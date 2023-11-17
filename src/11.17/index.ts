/**
 * 一个二叉搜索书的第 K 小值
 *
 * @description 想法：根据二叉搜索树的特性，
 *    先中序遍历得到一个有序序列，然后根据下表得到 K
 */

interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const tree: TreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};
// 前序遍历 - 迭代方式使用栈来模拟递归调用
export const preOrderTraverse = (tree: TreeNode) => {
  let res: number[] = [];
  let tempNode: TreeNode | null = tree;
  let stack: TreeNode[] = [];
  while (tempNode || stack.length) {
    if (tempNode) {
      res.push(tempNode.value);
      if (tempNode.right) {
        stack.push(tempNode.right);
      }
      tempNode = tempNode.left;
    } else {
      tempNode = stack.pop()!;
    }
  }
  return res;
};

console.log(preOrderTraverse(tree));
