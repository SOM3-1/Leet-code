# 19. Remove Nth Node From End of List
Medium

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

```
const removeNthFromEnd = (head, n) => {  
  let tortoise = head, hare = head;
  
  while (n) hare = hare.next, n--;
    
  if (!hare) return head.next;
  
  while (hare.next) hare = hare.next, tortoise = tortoise.next;       
         
  tortoise.next = tortoise.next.next
  
  return head
}
```
```
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    const dummy = new ListNode();
    dummy.next = head;
    console.log(dummy);

    let fast = dummy;
    let slow = dummy;
    
    while(n--!==0) {
        fast = fast.next;        
    }
    
    while(fast.next!==null) {
        fast = fast.next;
        console.log(fast);        
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}; 
```
