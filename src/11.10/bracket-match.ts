/**
 * 字符串匹配，最先想到的就应该是 栈
 *
 * 栈：是一种逻辑结构
 *  - 先进后出
 *
 * 遇到左括号 就入栈
 * 遇到右括号就判断栈顶元素是否可以匹配，匹配就出栈
 *
 *
 * 时间复杂度： O(n)
 * 空间复杂度: O(n)
 *
 */

const leftSymbols = "{[(";
const rightSymbols = "}])";

const isMatch = (left: string, right: string): boolean => {
  if (left === "{" && right === "}") return true;
  if (left === "[" && right === "]") return true;
  if (left === "(" && right === ")") return true;
  return false;
};

export const bracketMatch = (str: string): boolean => {
  const length = str.length;
  if (length === 0) return true;

  const stack: string[] = [];

  for (let i = 0; i < length; i++) {
    const s = str[i];
    if (leftSymbols.includes(s)) {
      stack.push(s);
    } else if (rightSymbols.includes(s)) {
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 功能测试
const str = "{ab(cde[feg]ss)123}fss";
console.info(bracketMatch(str));
