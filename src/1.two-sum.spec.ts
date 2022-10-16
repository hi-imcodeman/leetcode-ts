import { twoSum } from './1.two-sum'
describe('Two Sum',()=>{
    test('Case 1',()=>{
        const result=twoSum([3,3],6)
        expect(result).toEqual([0,1])
    })
    test('Case 2',()=>{
        const result=twoSum([2,3,4],6)
        expect(result).toEqual([0,2])
    })
    test('Case 3',()=>{
        const result=twoSum([2,7,11,15],22)
        expect(result).toEqual([1,3])
    })
    test('Case 3',()=>{
        const result=twoSum([2,7,11,15],23)
        expect(result).toEqual([])
    })
})
