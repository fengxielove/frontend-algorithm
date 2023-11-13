/**
 * @description 根据数组创建单向链表
 *
 */

export interface ILinkeListNode {
  value: number;
  next?: ILinkeListNode;
  prev?: ILinkeListNode;
}

export function createLinkList(arr: number[]): ILinkeListNode {
  const length = arr.length;
  if(length === 0) throw new Error('arr is empty')

  let curNode: ILinkeListNode = {
    value: arr[length - 1]
  }
  if(length === 1) return curNode

  for(let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}


/**
 * 反转单向链表，并返回反转之后的 head node
 * @param listNode 
 */
export function reverseLinkList(listNode: ILinkeListNode) :ILinkeListNode{
  let prevNode: ILinkeListNode | undefined = undefined
  let curNode: ILinkeListNode | undefined = undefined
  let nextNode: ILinkeListNode | undefined = listNode

  while(nextNode) {
    // 第一个元素，删掉 next 防止循环引用
    if(curNode && !prevNode) {
      delete curNode.next
    }

    // 反转指针
    if(curNode && prevNode) {
      curNode.next = prevNode
    }

    // 整体向后移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }
  curNode!.next = prevNode
  return curNode!
}


const arr = [100,200,300,400,500]
const list = createLinkList(arr)
console.log(list);

const list1 = reverseLinkList(list)
console.log(list1);
