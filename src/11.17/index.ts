/**
 * 一个二叉搜索树的第 K 小值
 *
 * @description 想法：根据二叉搜索树的特性，
 *    先 中序遍历得到一个有序序列，然后根据下标得到 K
 */

import { inOrderTraverseIteration, tree, TreeNode } from './inOrderTraverse';

export const findMinIndex = (tree: TreeNode, k: number): number | null => {
  const result = inOrderTraverseIteration(tree);
  return result[k - 1] || null;
};

console.log(findMinIndex(tree, 5));
