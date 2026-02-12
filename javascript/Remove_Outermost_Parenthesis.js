/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let countOpen = 0
    let countClose = 0
    let subStrings = [] // Builds the array that will be concatenated at the end
    let subString = "" // Builds the individual valid parenthesis to remove the outer parenthesis from
    let i = 0 // incrementor for the loop
    let returnValue = "" // final returned value
    while (i < s.length) {
        subString += s[i] // Build substring
        if (s[i] === "(") { // track if we have an equal number of open and close parenthesis
            countOpen += 1
        }
        else if (s[i] === ")") {
            countClose += 1
        }
        if (countOpen === countClose) { // If equal number, add to your subStrings array after removing the outer parenthesis
            const valid = subString.substring(1, subString.length - 1)
            subStrings.push(valid)
            subString = "" // reset substring
        }
        i += 1 // increment
    }
    returnValue = subStrings.join("")
    return returnValue
};