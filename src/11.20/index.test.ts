import { describe, it, expect } from 'vitest';

import { fibonacciByItor } from '.';

describe('斐波那契数列', () => {
  it('0 和 1', () => {
    expect(fibonacciByItor(0)).toBe(0);
    expect(fibonacciByItor(1)).toBe(1);
  });

  it('正常情况', () => {
    expect(fibonacciByItor(10)).toBe(55);
    expect(fibonacciByItor(2)).toBe(1);
  });

  it('n 小于 0', () => {
    expect(fibonacciByItor(-2)).toBe(0);
  });
});
