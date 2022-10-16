import { singleNumber } from './136.single-number'

describe('Single Number', ()=>{
    test('Case 1',()=>{
        const result = singleNumber([2,2,1])
        expect(result).toBe(1)
    })
    test('Case 2',()=>{
        const result = singleNumber([4,1,2,1,2])
        expect(result).toBe(4)
    })
    test('Case 3',()=>{
        const result = singleNumber([4,1,2,1,2,-3,4])
        expect(result).toBe(-3)
    })
})
