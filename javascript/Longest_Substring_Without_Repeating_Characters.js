/**
 * @param {string} s
 * @return {number}
 */

/*
Given a string s, find the length of the longest substring without duplicate characters.
*/
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) { // first things first, return 0 if an empty string is the input
        return 0
    }
    let candidate = s[0] // initialize the candidate substring
    let longestLength = 1; // initialize the return value
    for (let i = 1; i < s.length; i++) { // loop through input string starting from 2nd value
        if (candidate.includes(s[i])) { // check if the candidate includes the next string character
            if (candidate.length > longestLength) { // if it does, check if you need to update the return value before moving on to the next possible candidate
                longestLength = candidate.length
            }
            while (candidate.includes(s[i])) { // removed values from the left of the substring candidate until the substring doesn't contain the next character
                candidate = candidate.slice(1)
            }
            candidate += s[i] // append the current character to the substring
        }
        else { // if the character didn't exist in the substring, do the following
            candidate += s[i] // add the current character to the substring
            if (candidate.length > longestLength) { // check if the new substring is longer than the longest substring's length has been and reset it if it is
                longestLength = candidate.length
            }
        }
    }
    return longestLength
};