/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

import { ListNode } from './utils/linkedList'

// @lc code=start 

function reverseList(head: ListNode | null): ListNode | null {
    let prev:ListNode|null = null
    let curr:ListNode|null = head
    let next:ListNode|null = null
    while(curr){
        next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    return prev
}
// @lc code=end

export function reverseList2(head: ListNode | null): ListNode | null {
    if(!head)
        return head
    let revLL:ListNode|null = new ListNode(head.val)
    while(head.next){
        head=head.next
        revLL = new ListNode(head.val,revLL) 
    } 
    return revLL
}

export { reverseList }
