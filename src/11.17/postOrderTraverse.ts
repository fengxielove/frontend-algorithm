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

// 后续遍历 左右根
export const postOrderTraverse = (tree: TreeNode): number[] => {
  let tempNode: TreeNode | null = tree;
  let stack: TreeNode[] = [];
  let result: number[] = [];

  let lastVisitedNode: TreeNode | null = null;
  while (tempNode || stack.length > 0) {
    if (tempNode) {
      stack.push(tempNode);
      tempNode = tempNode.left;
    } else {
      let peekNode = stack[stack.length - 1]; // 获取栈顶节点
      if (peekNode.right && peekNode.right !== lastVisitedNode) {
        tempNode = peekNode.right;
      } else {
        result.push(peekNode.value);
        lastVisitedNode = stack.pop()!;
      }
    }
  }
  return result;
};

console.log(postOrderTraverse(tree));
