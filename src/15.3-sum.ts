/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (31.73%)
 * Likes:    25042
 * Dislikes: 2260
 * Total Accepted:    2.6M
 * Total Submissions: 7.9M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: 
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => (a - b))
    const result: number[][] = []
    for (let i = 0; i < nums.length - 2; i++) {
        while (nums[i] === nums[i - 1]) i++;
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const triplets = [nums[i],nums[left],nums[right]]
            const sum = triplets.reduce((pv,cv)=>pv+cv,0)
            if (sum === 0) {
                result.push(triplets)
                while (nums[left] === nums[left + 1]) left++;
                left++
            }else if (sum > 0) right--;
            else left++;
        }
    }
    return result
}
// @lc code=end

export { threeSum }