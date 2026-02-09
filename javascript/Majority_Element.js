/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
var majorityElement = function(nums) {
    const arrayLen = nums.length
    const majorityCond = (arrayLen / 2) // This condition will be used to check whether we've found the solution and end the function call early.
    const numbersDic = {} // This will be used to increment the number of occurances based on the number which will serve as the key.
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        if (number in numbersDic) { // check if the number exists as a key in the object yet
            numbersDic[number] += 1 // increment if it exists already
        }
        else {
            numbersDic[number] = 1 // instantiate if it is the first occurance
        }
        if (numbersDic[number] > majorityCond) { // check end condition
            return number
        }
    }
};