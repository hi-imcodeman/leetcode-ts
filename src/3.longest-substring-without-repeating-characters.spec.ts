import { lengthOfLongestSubstring } from './3.longest-substring-without-repeating-characters'

describe('lengthOfLongestSubstring',()=>{
    test('Case 1',()=>{
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    })
    test('Case 2',()=>{
        expect(lengthOfLongestSubstring('pwwkerty')).toBe(6)
    })
    test('Case 3',()=>{
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    })
    test('Case 4',()=>{
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    })
    test('Case 5',()=>{
        expect(lengthOfLongestSubstring('dvdf')).toBe(3)
    })
})