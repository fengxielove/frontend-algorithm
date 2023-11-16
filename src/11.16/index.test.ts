import { describe, it, expect } from 'vitest';
import { findTwoNumberTotal } from '.';

describe('两数之和', () => {
  it('normal', () => {
    expect(findTwoNumberTotal([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(findTwoNumberTotal([2, 3, 4], 6)).toEqual([0, 2]);
    expect(findTwoNumberTotal([3, 3], 6)).toEqual([0, 1]);
  });

  it('error', () => {
    expect(findTwoNumberTotal([2, 7, 11, 15], 10)).toEqual([]);
    expect(findTwoNumberTotal([2, 3, 4], 5)).toEqual([0, 1]);
    expect(findTwoNumberTotal([3, 3], 5)).toEqual([]);
  });
});
