/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.08%)
 * Likes:    17502
 * Dislikes: 708
 * Total Accepted:    1.4M
 * Total Submissions: 1.9M
 * Testcase Example:  '3'
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    if (n === 0) return [];
    const result: string[] = [];
    const backTracking = (open: number, close: number, max: number, cur: string) => {
        if (close === max) result.push(cur);
        if (open < max) backTracking(open + 1, close, max, cur + "(");
        if (close < open) backTracking(open, close + 1, max, cur + ")");
    }
    backTracking(0, 0, n, "");
    return result;
}
// @lc code=end

export { generateParenthesis }