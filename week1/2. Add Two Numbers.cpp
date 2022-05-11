/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int carry = 0;
        int sum = 0;
        ListNode* sum_head = new ListNode();
        ListNode* sum_ptr = sum_head;
        
        
        while(l1 != NULL || l2 != NULL){
            sum = carry;
            sum += l1 ? l1->val : 0;
            sum += l2 ? l2->val : 0;
            
            sum_ptr->val = sum % 10;
            carry = sum / 10;
            
            l1 = l1 ? l1->next : NULL;
            l2 = l2 ? l2->next : NULL;
            if(l1 || l2) sum_ptr = sum_ptr->next = new ListNode();
        }
        
        if(carry != 0) sum_ptr->next = new ListNode(1);
        
        return sum_head;
    }
};