/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i=0
    let j=1
    while(j<nums.length){
        if(nums[i] === 0 && nums[j] !== 0){
            const temp = nums[j]
            nums[j]=nums[i]
            nums[i]=temp
            i++
        }else if(nums[i] !== 0){
            i++
        }
        j++
    }
}
// @lc code=end

export { moveZeroes }

