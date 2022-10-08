import { reverseList, ListNode } from './206.reverse-linked-list'

const arrayToLinkedList = (nums:number[]) => {
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

const linkedListToArray = (listNode:ListNode|null) => {
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

describe('Reverse List', () => {
    test('Case 1',()=>{
        const nums:number[]=[2,-4,5,6,7]
        const listNode=arrayToLinkedList(nums)
        const result=reverseList(listNode)
        const resultArr = linkedListToArray(result)
        console.log(resultArr)
    })
})