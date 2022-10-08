/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

 //Definition for singly-linked list.
 export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// @lc code=start 

function reverseList(head: ListNode | null): ListNode | null {
    if(!head)
        return head
    let revLL:ListNode|null = new ListNode(head?.val)
    while(head?.next){
        head=head.next
        revLL = new ListNode(head.val,revLL) 
    } 
    return revLL
}
// @lc code=end

export { reverseList }
