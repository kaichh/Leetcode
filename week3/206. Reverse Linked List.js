/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    
    let p1 = head
    let p2 = head.next
    let pNext = head.next.next
    
    
    p1.next = null
    while (true) {
        p2.next = p1
        
        if (!pNext) return p2;
        
        p1 = p2
        p2 = pNext
        pNext = pNext.next
    } 
};