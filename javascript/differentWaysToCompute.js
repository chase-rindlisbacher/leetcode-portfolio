// Leetcode Problem 241

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    if (!isNaN(expression)) { // if the input is just a number, return it as an array of Numbers
        return [Number(expression)]
    }
    const returnArray = []
    const compute = (operand1, operand2, operator) => { // take 2 numbers and an operator then perform the computation and return the result
        if (operator === "*") {
            return Number(operand1) * Number(operand2);
        }
        else if (operator === "+") {
            return Number(operand1) + Number(operand2);
        }
        else {
            return Number(operand1) - Number(operand2);
        }
    }
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i]
        if (char === "+" || char === "-" || char === "*") {
            let leftResults = diffWaysToCompute(expression.slice(0,i)) // Take the left side of this operator and recursively call this function again with it
            let rightResults = diffWaysToCompute(expression.slice(i+1)) // Take the right side of this operator and recursively call this function with it
            
            for (const left of leftResults) { 
                for (const right of rightResults) {
                    returnArray.push(compute(left,right,char)) // Compute the outcome of the small expression and add it to the return array
                }
            }
        }

    }

    return returnArray // Return the array of computed values
};


console.log(diffWaysToCompute("2-1-1*6+5"))