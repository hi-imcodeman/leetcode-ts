import { ListNode } from './utils/linkedList'
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (39.21%)
 * Likes:    25391
 * Dislikes: 4922
 * Total Accepted:    3.6M
 * Total Submissions: 8.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have
 * leading zeros.
 * 
 * 
 */

// @lc code=start
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const resultNode:ListNode = new ListNode()
    let curr:ListNode=resultNode
    let carry = 0
    while(l1 || l2 || carry){
        const v1 = l1?.val || 0
        const v2 = l2?.val || 0
        const sum = v1 + v2 + carry
        carry = Math.floor(sum/10)
        curr.next = new ListNode(sum%10)
        curr = curr.next

        l1 = l1?.next || null
        l2 = l2?.next || null
    }
    return resultNode.next
}
// @lc code=end

export { addTwoNumbers }