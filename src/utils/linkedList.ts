
//Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export const arrayToLinkedList = (nums:number[]):ListNode | null => {
    if(!nums.length)
        return null
    const listNode:ListNode = new ListNode(nums[0])
        let currNode = listNode
        let i=1
        while(i<nums.length){
            const node = new ListNode(nums[i])
            currNode.next = node
            currNode = currNode.next
            i++
        }
        return listNode
}

export const linkedListToArray = (listNode:ListNode|null):number[] => {
    if(!listNode)
        return []
    const data:number[]=[]
    let currNode = listNode
    data.push(currNode.val)
    while(currNode.next){
        currNode = currNode.next
        data.push(currNode.val)
    }
    return data
}

