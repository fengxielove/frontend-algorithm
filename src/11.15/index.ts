/**
 * @description 二分查找法  - 循环实现
 * @author fengxie
 */
export const binarySearch = (arr: number[], target: number): number => {
  if (arr.length === 0) {
    return -1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // Math.floor() 向下取整
    const mid = Math.floor((right + left) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

export const recursionBinarySearch = (
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
): number => {
  if (arr.length === 0) return -1;

  if (startIndex == undefined) startIndex = 0;
  if (endIndex == undefined) endIndex = arr.length - 1;

  if (startIndex === endIndex) return -1;

  const midIndex = Math.floor((startIndex + endIndex) / 2);

  if (target < arr[midIndex]) {
    return recursionBinarySearch(arr, target, startIndex, midIndex - 1);
  } else if (target > arr[midIndex]) {
    return recursionBinarySearch(arr, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }
};

// 性能测试
// binarySearch: 4.934ms
console.time('binarySearch');
for (let index = 0; index < 100 * 10000; index++) {
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
}
console.timeEnd('binarySearch');

// recursionBinarySearch: 14.768ms
console.time('recursionBinarySearch');
for (let index = 0; index < 100 * 10000; index++) {
  recursionBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
}
console.timeEnd('recursionBinarySearch');
