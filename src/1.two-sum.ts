/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        const offsetIndex = nums.indexOf(diff, i + 1);
        if (offsetIndex > i) {
            return [i, offsetIndex]
        }
    }
    return []
}
// @lc code=end

