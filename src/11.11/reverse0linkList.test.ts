import { test, expect, describe, it } from "vitest";
import { reverseLinkList, ILinkeListNode, createLinkList } from "./reverse-linkList";

describe("反转链表", () => {
    it('单个元素', () => {
        const node: ILinkeListNode = {value: 100}
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({value: 100})
    })

    it('多个元素', () => {
        const node = createLinkList([100,200,300])
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })
})