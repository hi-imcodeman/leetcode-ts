import { moveZeroes } from './283.move-zeroes'

describe('Move Zeros',()=>{
    test('Case 1',()=>{
        const nums=[0,1,0,3,12]
        moveZeroes(nums)
        expect(nums).toEqual([1,3,12,0,0])
    })
    test('Case 2',()=>{
        const nums=[0]
        moveZeroes(nums)
        expect(nums).toEqual([0])
    })
    test('Case 3',()=>{
        const nums=[1,2,0,3,-8,0,1]
        moveZeroes(nums)
        expect(nums).toEqual([1,2,3,-8,1,0,0])
    })
})
