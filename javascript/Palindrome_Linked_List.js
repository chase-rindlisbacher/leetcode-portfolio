// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) { // O(n) time complexity, O(1) memory complexity
    if (!head) { // if head is falsey, return false
        return false
    }
    if (!head.next) { // if linked list is 1 unit long, it is a palindrome
        return true
    }
    let slow = head // start a pointer that will traverse the linked list 1 step at a time
    let fast = head // start a pointer that will traverse the linked list 2 steps at a time
    while (fast && fast.next) { // loop until the fast pointer reaches the end of the list
        slow = slow.next // slow pointer should end up at the middle of the list
        fast = fast.next.next
    }
    let prev = null // track the previous pointer (used for reversing the list)
    let current = slow
    while (current) { // starting from the middle, start reversing the 2nd half of the list
        let next = current.next // save the current node's next node
        current.next = prev // set the current node's next node to the previous node
        prev = current // set the previous node to the current node
        current = next // set the current node to the stored next node
    }
    
    while (prev) { // loop through until prev will be null when you reach the middle of the loop
        if (head.val !== prev.val) { // if the pointer starting at the beginning (head) and the pointer starting at the end (prev) don't equal each other, return early, it's not a palindrome
            return false
        }
        head = head.next // iterate forward from start
        prev = prev.next // iterate backward from end
    }
    
    return true // if the while loop completes without returning false, return true, you found a palindrome
};