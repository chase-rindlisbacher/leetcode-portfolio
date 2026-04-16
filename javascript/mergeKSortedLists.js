/* Leetcode 23. Merge k Sorted Lists */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists, output = null) {
    console.log(lists)
    if (lists.length === 0) {
        return output
    }
    let newList = lists.pop() // node to be inserted
    if (!newList) {
        if (lists.length > 0) {
            return mergeKLists(lists, output)
        }
        return output
    }

    let newNode = new ListNode(newList.val, null)
    
    if (output === null) {
        return mergeKLists(lists, newList)
    }

    let headNode = output
    let previousNode = null
    let currentNode = headNode
    let nextNode = newList.next
    while (currentNode && newNode) {
        if (newNode.val < currentNode.val) {
            if (currentNode === headNode) {
                headNode = newNode
                headNode.next = currentNode
                previousNode = headNode
            } else {
                newNode.next = currentNode
                previousNode.next = newNode
                previousNode = newNode
            }
            if (nextNode) {
                newNode = new ListNode(nextNode.val, null)
                nextNode = nextNode.next
            } else {
                newNode = null
            }
        } 
        else if (newNode.val >= currentNode.val) {
            if (currentNode.next) {
                while (currentNode.next && newNode.val >= currentNode.next.val) {
                    currentNode = currentNode.next
                }
            }
            if (currentNode.next) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                currentNode = newNode.next
                previousNode = newNode
            } else if (nextNode) {
                newNode.next = nextNode
                currentNode.next = newNode
                newNode = null
                continue
            } else {
                currentNode.next = newNode
                newNode = null
                continue
            }
            if (nextNode) {
                newNode = new ListNode(nextNode.val, null)
                nextNode = nextNode.next
            } else {
                newNode = null
            }
        }
    }
    if (lists.length > 0) {
        return mergeKLists(lists, headNode)
    }
    return headNode
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function buildList(array) {
    const dummy = new ListNode()
    let current = dummy
    for (const value of array) {
        current.next = new ListNode(value)
        current = current.next
    }
    return dummy.next
}

function printList(head) {
    const values = []
    while (head) {
        values.push(head.val)
        head = head.next
    }
    return values
}

const testCases = [
    { input: [[],[-1,5,11],[],[6,10]], label: '[[],[-1,5,11],[],[6,10]]'},
    { input: [[1,2,3],[4,5,6,7]], label: '[[1,2,3],[4,5,6,7]]'},
    { input: [[1],[0]], label: '[[1],[0]]'},
    { input: [[1, 2, 2], [1, 1, 2]], label: '[[1,2,2],[1,1,2]]'},
    { input: [[1, 4, 5], [1, 3, 4], [2, 6]], label: '[[1,4,5],[1,3,4],[2,6]]' },
    { input: [], label: '[]' },
    { input: [[]], label: '[[]]' }
]

for (const { input, label } of testCases) {
    const listNodes = input.map(arr => buildList(arr))
    const result = mergeKLists(listNodes)
    console.log(`Test ${label}:`, printList(result))
}
