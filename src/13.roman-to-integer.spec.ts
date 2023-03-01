import { romanToInt } from './13.roman-to-integer'

describe('Roman to Integer',()=>{
    test('Case 1',()=>{
        const result=romanToInt('III')
        expect(result).toBe(3)
    })
    test('Case 2',()=>{
        const result=romanToInt('XVII')
        expect(result).toBe(17)
    })
    test('Case 3',()=>{
        const result=romanToInt('XIX')
        expect(result).toBe(19)
    })
    test('Case 4',()=>{
        const result=romanToInt('CMXCIV')
        expect(result).toBe(994)
    })
    test('Case 5',()=>{
        const result=romanToInt('MCDXCIV')
        expect(result).toBe(1494)
    })
})