import { plusOne } from './66.plus-one'

describe('canJump', ()=>{
    test('Case 1',()=>{
        const result = plusOne([9,9])
        expect(result).toEqual([1,0,0])
    })
    test('Case 2',()=>{
        const result = plusOne([1,2,3])
        expect(result).toEqual([1,2,4])
    })
})
