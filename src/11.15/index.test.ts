import { describe, it, expect } from 'vitest';
import { binarySearch, recursionBinarySearch } from '.';

describe('循环二分查找', () => {
  it('二分查找', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
  });
});

describe('递归二分查找', () => {
  it('二分查找', () => {
    expect(recursionBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toBe(2);
    expect(recursionBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
  });
});
