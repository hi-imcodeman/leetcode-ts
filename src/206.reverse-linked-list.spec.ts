import { reverseList } from './206.reverse-linked-list'
import {arrayToLinkedList, linkedListToArray } from './utils/linkedList'
describe('Reverse List', () => {
    test('Case 1',()=>{
        const nums:number[]=[0,1,4,-2]
        const listNode=arrayToLinkedList(nums)
        const result=reverseList(listNode)
        const resultArr = linkedListToArray(result)
        expect(resultArr).toEqual([-2,4,1,0])
    })
    test('Case 2',()=>{
        const nums:number[]=[3]
        const listNode=arrayToLinkedList(nums)
        const result=reverseList(listNode)
        const resultArr = linkedListToArray(result)
        expect(resultArr).toEqual([3])
    })
    test('Case 3',()=>{
        const nums:number[]=[]
        const listNode=arrayToLinkedList(nums)
        const result=reverseList(listNode)
        const resultArr = linkedListToArray(result)
        expect(resultArr).toEqual([])
    })
})