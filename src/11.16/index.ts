/**
 * 给一个数组，找出其中 和为 n 的两个元素
 *
 * 有一个递增的数组 [1,2,4,7,11,15] 和一个 n = 15
 */

/**
 * @description 想法：左右两个指针，先找到小于目标值的最大值，
 *    然后头指针+尾指针 > target 则尾指针--
 *       头指针+尾指针 < target 则头指针++
 * 如果 头尾指针相等则失败
 */

const simple = (arr: number[], target: number): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

export const findTwoNumberTotal = (arr: number[], target: number): number[] => {
  if (arr.length === 0) return [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      return [left, right];
    }
  }
  return [];
};
