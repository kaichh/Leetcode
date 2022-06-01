/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    
    let p1 = list1
    let p2Previous = new ListNode(-Infinity, list2)
    let p2Head = p2Previous
    let p2 = p2Previous.next
    
    while (p1 && p2) {
        if (p1.val < p2.val && p1.val >= p2Previous.val) {
            p2Previous.next = p1
            p1 = p1.next
            p2Previous = p2Previous.next
            p2Previous.next = p2
            //console.log('inserted, now p2 =', p2Head)
        }else {
            p2 = p2.next
            p2Previous = p2Previous.next
        }
    }
    
    if (p1) p2Previous.next = p1;
    
    return p2Head.next
};