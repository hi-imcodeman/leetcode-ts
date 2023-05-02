/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.57%)
 * Likes:    33239
 * Dislikes: 1451
 * Total Accepted:    4.4M
 * Total Submissions: 13M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 * 
 * 
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const list: string[] = []
    let longest = 0
    for (const char of s) {
        const indexInList = list.indexOf(char)
        if (indexInList !== -1) {
            // if char repeats remove upto that
            list.splice(0, indexInList + 1)
        }
        list.push(char)
        longest = Math.max(longest, list.length)
    }
    return longest
}
// @lc code=end

export { lengthOfLongestSubstring }
