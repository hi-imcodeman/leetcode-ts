import { addTwoNumbers } from './2.add-two-numbers'
import {arrayToLinkedList, linkedListToArray, ListNode } from './utils/linkedList'
describe('addTwoNumber',()=>{
    test('Case 1',()=>{
        const l1 = arrayToLinkedList([9,9,9,9,9,9,9])
        const l2 = arrayToLinkedList([9,9,9,9])
        const result = addTwoNumbers(l1,l2)
        expect(linkedListToArray(result)).toEqual([8,9,9,9,0,0,0,1])
    })
})