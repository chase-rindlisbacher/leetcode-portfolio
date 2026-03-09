var hasCycle = function(head) {
    if (head) { // Check if the head is truthy
        let current = head // Initialize the current node
        let nodes = new Set() // Create a new empty Set
        while (current !== null) { // start loop
            if (nodes.has(current)) { // Check if the node exists in the set
                return true 
            }
            nodes.add(current) // If not, add the node to the set and iterate to the next node
            current = current.next
        }
        // If the loop stops executing, return false as you found an end to the linkedList
        return false
    }
    // return false if the head param was falsy
    return false
};