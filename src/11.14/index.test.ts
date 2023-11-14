/**
 *
 */
import { describe, expect, it } from "vitest";
import { MyQueue } from ".";

describe("链表实现队列", () => {
  it("add and length", () => {
    const q = new MyQueue();
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.length).toBe(3)
  });

  it("delete", () => {
    const q = new MyQueue();
    expect(q.delete()).toBeNull()
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.delete()).toBe(100)
    expect(q.delete()).toBe(200)
    expect(q.delete()).toBe(300)
    expect(q.delete()).toBe(null)
  })
});
