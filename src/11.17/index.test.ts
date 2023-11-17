import { describe, it, expect } from 'vitest';
import { findMinIndex } from '.';
import { tree } from './inOrderTraverse';

describe('二叉搜索树查找最小 K 值', () => {
  it('正确情况', () => {
    const res = findMinIndex(tree, 3);
    expect(res).toBe(4);
  });

  it('错误情况', () => {
    const res = findMinIndex(tree, 20);
    expect(res).toBe(null);
  });
});
