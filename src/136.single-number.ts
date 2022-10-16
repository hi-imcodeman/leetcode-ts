/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let sn=nums[0]
    let i=1
    while(i<nums.length){
        sn=sn ^ nums[i]
        i++
    }
    return sn
}
// @lc code=end

export { singleNumber }
