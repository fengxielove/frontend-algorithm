/**
 * 时间复杂度：O(n^2)
 *  数组是一个有序结构，unshift 操作非常慢!!!
 * 空间复杂度: O(1)
 * @param arr
 * @param k
 * @returns
 */
export const rotate1 = (arr: number[], k: number): number[] => {
  const length = arr.length;
  if (!k || length === 0) return arr;

  const step = Math.abs(k % length);
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n != null) {
      arr.unshift(n);
    }
  }
  return arr;
};

// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = rotate1(arr, 4);
// console.log("验证结果：", result);

/**
 * 时间复杂度：O(1)
 * 空间复杂度: O(n)
 * 旋转数组 k 步 - 使用 concat
 * @param arr
 * @param k
 */
export const rotate2 = (arr: number[], k: number): number[] => {
  const length = arr.length;

  if (!k || length === 0) return arr;

  const step = Math.abs(k % length);
  const part1 = arr.splice(-step);
  const part2 = arr.splice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
};
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const result2 = rotate2(arr2, 4);
// console.log("验证结果：", result2);

// 性能测试
// const testArr: number[] = [];
// for (let i = 0; i < 10 * 10000; i++) {
//   testArr.push(i);
// }
// console.time("rotate1");
// rotate1(testArr, 9 * 10000);
// console.timeEnd("rotate1");

// const testArr2: number[] = [];
// for (let i = 0; i < 10 * 10000; i++) {
//   testArr2.push(i);
// }
// console.time("rotate2");
// rotate2(testArr2, 9 * 10000);
// console.timeEnd("rotate2");
