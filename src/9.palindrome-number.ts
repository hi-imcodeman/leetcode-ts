/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const originalNumber=x
    const digits:number[]=[]
    while(x>0){
        const q=x%10
        x=(x-q)/10
        digits.push(q)
    }
    return originalNumber === Number(digits.join(''))
}
// @lc code=end

export { isPalindrome }
