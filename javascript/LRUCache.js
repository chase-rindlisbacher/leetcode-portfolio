// Leetcode Problem 146

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = {}
    this.queue = []  
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache[key] !== undefined) {
        let copyArray = this.queue
        const value = this.cache[key]
        let stop = false
        let i = 0;
        while (stop === false) {
            if (copyArray[i] === key) {
                const appendToEnd = copyArray.splice(i,1)
                copyArray.push(appendToEnd[0])
                stop = true
            }
            i += 1
        }
        this.queue = copyArray;
        if (this.queue.length > this.capacity) {
            const deleteFromCache = this.queue.shift()
            delete this.cache[deleteFromCache]
        }
        return value
    }
    else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache[key] !== undefined) { // If the key exists in the cache
        this.cache[key] = value // update the cache with the new value
        let copyArray = this.queue // repeat the logic to move the last accessed element into its correct place in the queue
        let stop = false
        let i = 0;
        while (stop === false) { // loop through the copied array
            if (copyArray[i] === key) {
                const appendToEnd = copyArray.splice(i,1) // grab the current key
                copyArray.push(appendToEnd[0]) // pit it at the end of the array
                stop = true
            }
            i += 1
        }
        this.queue = copyArray; // reinstantiate the queue
        if (this.queue.length > this.capacity) { // if the queue is above capacity
            const deleteFromCache = this.queue.shift() // delete the 1st element
            delete this.cache[deleteFromCache] // delete from cache
        }
    }
    else { // For when the key doesn't exist
        this.queue.push(key)
        this.cache[key] = value
        if (this.queue.length > this.capacity) { // if the queue is above capacity
            const toDelete = this.queue.shift() // delete the 1st element
            delete this.cache[toDelete] // delete from cache
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Help me write some test code for the above function using an array of inputs
// Use this test case below
// ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
// [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]
