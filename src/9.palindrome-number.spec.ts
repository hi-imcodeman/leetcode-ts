import { isPalindrome } from './9.palindrome-number'

describe('Palindrome Number', ()=>{
    test('Case 1',()=>{
        const result=isPalindrome(123454321)
        expect(result).toBeTruthy()
    })
    test('Case 2',()=>{
        const result=isPalindrome(12345)
        expect(result).toBeFalsy()
    })
    test('Case 3',()=>{
        const result=isPalindrome(-123454321)
        expect(result).toBeFalsy()
    })
})