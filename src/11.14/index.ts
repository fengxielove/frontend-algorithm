/**
 * 链表和数组，哪个实现队列更快
 *  - 链表更快
 * 
 *  分析：
 *      - 数组是连续存储，push 很快，shift 很慢，故而出队操作就很会慢
 *      - 链表是非连续存储，add 和 delete 都很快，但是查找慢，故而出队操作就会很快
 * 
 *  单向链表实现队列：
 *      - 记录 head 和 tail
 *      - 从 tail 入队，head 出队
 *      - length 实时更新记录，不要遍历获取长度
 */

interface IListNode {
    value: number
    next: IListNode | null
}

export class MyQueue {
    private head: IListNode | null = null;
    private tail: IListNode | null = null;
    private len: number = 0

    // 入队操作
    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null
        }
        if(this.head == null) {
            this.head = newNode
        }
        const tailNode = this.tail
        if(tailNode) {
            tailNode.next = newNode
        }
        this.tail = newNode
        this.len++
    }

    delete(): number | null {
        const deleteNode = this.head
        if(!deleteNode) return null
        if(this.len <= 0) return null

        this.head = deleteNode.next
        this.len--
        return deleteNode.value
    }

    get length():number {
        return this.len
    }
}

// 功能测试

const q = new MyQueue()
q.add(100)
q.add(200)
q.add(300)
console.log(q);

console.log(q.delete());
console.log(q);

console.log(q.delete());
console.log(q);



// 性能测试
// queue with list: 7.045ms
// queue with array: 801.187ms
const q1 = new MyQueue()
console.time('queue with list');
for(let i = 0; i < 10 * 10000;i++) {
    q1.add(i)
}
for(let i = 0; i < 10 * 10000;i++) {
    q1.delete()
}
console.timeEnd('queue with list');

const q2: number[] = []
console.time('queue with array');
for(let i = 0; i < 10 * 10000;i++) {
    q2.push(i)
}
for(let i = 0; i < 10 * 10000;i++) {
    q2.shift()
}
console.timeEnd('queue with array');
