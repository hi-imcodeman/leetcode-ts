import { myAtoi } from './8.string-to-integer-atoi'

describe('String to Integer - atoi',()=>{
    test('Case 1',()=>{
        const number=myAtoi('   123')
        expect(number).toBe(123)
    })
    test('Case 2',()=>{
        const number=myAtoi('   -123')
        expect(number).toBe(-123)
    })
    test('Case 3',()=>{
        const number=myAtoi('-+123')
        expect(number).toBe(0)
    })
    test('Case 4',()=>{
        const number=myAtoi('words 123')
        expect(number).toBe(0)
    })
    test('Case 5',()=>{
        const number=myAtoi('9876543210')
        expect(number).toBe(2147483647)
    })
    test('Case 6',()=>{
        const number=myAtoi('-9876543210')
        expect(number).toBe(-2147483648)
    })
})