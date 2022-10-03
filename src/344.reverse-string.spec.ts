import { reverseString } from './344.reverse-string'

describe('Reverse String (Inplace)',()=>{
    test('Case 1',()=>{
        const str='hello'.split('')
        reverseString(str)
        expect(str).toEqual('olleh'.split(''))
    })
    test('Case 2',()=>{
        const str='asraf ali'.split('')
        reverseString(str)
        expect(str).toEqual('ila farsa'.split(''))
    })
})