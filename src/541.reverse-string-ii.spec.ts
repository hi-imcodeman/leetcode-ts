import { reverseStr } from './541.reverse-string-ii'

describe('Reverse String II',()=>{
    test('Case 1',()=>{
        const str='abcdefg'
        const result=reverseStr(str,2)
        expect(result).toEqual('bacdfeg')
    })
    test('Case 2',()=>{
        const str='abcdefg'
        const result=reverseStr(str,4)
        expect(result).toEqual('dcbaefg')
    })
    test('Case 3',()=>{
        const str='abcdefg'
        const result=reverseStr(str,1)
        expect(result).toEqual('abcdefg')
    })
})