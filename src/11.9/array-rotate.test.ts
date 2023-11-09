import { test, expect, describe, it } from "vitest";
import { rotate1, rotate2 } from "./array-rotate";

describe("数组旋转", () => {
  it("正常情况", async () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    const res = rotate2(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("数组为空", async () => {
    const arr = [];
    const k = 3;
    const res = rotate2(arr, k);
    expect(res).toEqual([]);
  });

  it("k是负值", async () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = -3;
    const res = rotate2(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("k不是数字", async () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = rotate1(arr, k);
    expect(res).toEqual(arr);
  });

  it("k 是 0", async () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    const res = rotate2(arr, k);
    expect(res).toEqual(arr);
  });
});
