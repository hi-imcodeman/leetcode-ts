/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (67.74%)
 * Likes:    1810
 * Dislikes: 255
 * Total Accepted:    935.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '3'
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 * 
 * 
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * 
 * 
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * Example 2:
 * Input: n = 5
 * Output: ["1","2","Fizz","4","Buzz"]
 * Example 3:
 * Input: n = 15
 * Output:
 * ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^4
 * 
 * 
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    const result: string[] = []
    for (let i = 1; i <= n; i++) {
        const fizz = i % 3 === 0 ? 'Fizz' : ''
        const buzz = i % 5 === 0 ? 'Buzz' : ''
        result.push(fizz + buzz ? fizz + buzz : `${i}`)
    }
    return result
}
// @lc code=end

export { fizzBuzz }