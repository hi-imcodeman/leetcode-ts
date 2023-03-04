import { arrayToLinkedList, linkedListToArray } from './linkedList'

describe('Linked List', () => {
    test('arrayToLinkedList',()=>{
        const LL = arrayToLinkedList([1,2,3,4,5,6])
        expect(LL).toMatchSnapshot()
    })
    test('linkedListToArray',()=>{
        const LL = arrayToLinkedList([1,2,3,4,5,6])
        const arr = linkedListToArray(LL)
        expect(arr).toEqual([1,2,3,4,5,6])
    })
})