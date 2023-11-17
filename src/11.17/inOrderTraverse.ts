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

// 中序遍历 - 递归
export const inOrderTraverse = (
  tree: TreeNode,
  result: number[] = []
): number[] => {
  if (tree) {
    inOrderTraverse(tree.left!, result);
    result.push(tree.value);
    inOrderTraverse(tree.right!, result);
  }
  return result;
};
// 测试中序遍历
console.log(inOrderTraverse(tree));

// 迭代实现中序遍历
export const inOrderTraverseIteration = (
  tree: TreeNode,
  result: number[] = []
): number[] => {
  let res: number[] = [];
  let tempNode: TreeNode | null = tree;
  let stack: TreeNode[] = [];
  while (tempNode || stack.length) {
    if (tempNode) {
      stack.push(tempNode);
      tempNode = tempNode.left;
    } else {
      tempNode = stack.pop()!;
      res.push(tempNode.value);
      tempNode = tempNode.right;
    }
  }
  return [];
};
