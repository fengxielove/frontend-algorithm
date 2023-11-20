/**
 * 求 斐波那契数列
 *  - 递归
 *  - 循环
 */

export const fibonacci = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// 功能测试
console.log(fibonacci(10));

export const fibonacciByItor = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 1; // 记录 n - 1 的结果
  let b = 0; // 记录 n - 2 的结果
  let res = 0;

  for (let i = 2; i <= n; i++) {
    res = a + b;
    b = a;
    a = res;
  }
  return res;
};

console.log(fibonacciByItor(100));
