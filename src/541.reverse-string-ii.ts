/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStringPos(s: string[], start: number, end: number): string[] {
    let i = start
    let j = end
    while (i < j) {
        const temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i = i + 1
        j = j - 1
    }
    return s;
}
function reverseStr(s: string, k: number): string {
    let strArray=s.split("")
    const len=strArray.length
    const step = 2 * k
    for(let i=0;i<len-1;i=i+step){
        strArray=reverseStringPos(strArray,i,i+(k-1))
    }
    return strArray.join("")
}
// @lc code=end

export { reverseStr }
