/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (57.52%)
 * Likes:    25244
 * Dislikes: 348
 * Total Accepted:    1.5M
 * Total Submissions: 2.5M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it can trap after raining.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array
 * [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue
 * section) are being trapped.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * 
 */

// @lc code=left
function trap(height: number[]): number {
    let water = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}
// @lc code=end

// My initial try
// function trap1(height: number[]): number {
//     let acc = 0
//     const { length } = height
//     if (length > 1) {
//         let left = 0
//         let curr = 1
//         let right = 1
//         let positions = []
//         while (curr < length) {
//             if (height[curr] < height[left]) {
//                 positions.push(curr)
//                 if (height[curr] >= height[curr - 1]) {
//                     right = curr
//                 }
//                 curr++
//             } else {
//                 positions.forEach(position => {
//                     acc += (height[left] - height[position])
//                 })
//                 positions = []
//                 left = curr
//                 curr++
//             }
//         }
//         if (positions.length) {
//             positions.forEach(position => {
//                 if (position <= right && height[position] < height[right])
//                     acc += (height[right] - height[position])
//             })
//         }
//     }
//     return acc
// }

// function trap2(height: number[]): number {
//     let water = 0;
//     const size = height.length;
//     let leftMax = height[0];
//     let rightMax = height[size -1];
//     const leftArr = new Array(size);
//     leftArr[0] = height[0];
//     const rightArr = new Array(size);
//     rightArr[size-1] = height[size -1];
//     for(let i=1;i<height.length;i++){
//         leftMax = Math.max(leftMax, height[i]);
//         leftArr[i] = leftMax;
//     }
//     for(let k=height.length -2;k>=0;k--){
//         rightMax = Math.max(rightMax, height[k]);
//         rightArr[k] = rightMax;
//     }
    
//     for(let j=0;j<height.length;j++){
//         water = water + (Math.min(leftArr[j], rightArr[j]) - height[j]);
//     }
//     return water;
// }

export { trap }

