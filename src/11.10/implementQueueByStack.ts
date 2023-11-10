/**
 * @description 通过两个栈，实现一个队列的效果
 * @author fengxie
 *
 * 时间复杂度：add O(1)  delete O(n)
 */

export class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  /**
   * 入队操作
   * @param n
   */
  add(n: number) {
    this.stack1.push(n);
  }

  /**
   * 出队
   */
  delete(): number | null {
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    // 将 stack1 的所有元素移动到 stack2中
    while (stack1.length) {
      const n = stack1.pop();
      if (n != null) {
        stack2.push(n);
      }
    }

    let res = stack2.pop();

    // 将 stack2 的元素再 返回到 stack1 中
    while (stack2.length) {
      const n = stack2.pop();
      if (n != null) {
        stack1.push(n);
      }
    }

    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }
}

// 功能测试

const q = new MyQueue();
q.add(100);
q.add(200);
q.add(3);
console.info(q.length);
console.info(q.delete());
console.info(q.length);
