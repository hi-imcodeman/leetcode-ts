/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (65.16%)
 * Likes:    14804
 * Dislikes: 430
 * Total Accepted:    1.9M
 * Total Submissions: 2.9M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 * 
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 * 
 * 
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const result: string[][] = []
    const hashMap = new Map<string, string[]>()
    strs.forEach(str => {
        const key = str.split('').sort().join('')
        if (hashMap.has(key)) {
            hashMap.get(key)?.push(str)
        } else {
            hashMap.set(key, [str])
        }
    })
    hashMap.forEach((value) => {
        result.push(value)
    })
    return result
}
// @lc code=end

export { groupAnagrams } 
