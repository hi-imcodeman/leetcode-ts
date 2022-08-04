/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0
    let j = s.length - 1
    while (i < j) {
        const temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i = i + 1
        j = j - 1
    }
}
// @lc code=end

