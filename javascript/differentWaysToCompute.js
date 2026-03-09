var diffWaysToCompute = function(expression) {
    if (!isNaN(expression)) {
        return [Number(expression)]
    }
    const returnArray = []
    const compute = (operand1, operand2, operator) => {
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
            let leftResults = diffWaysToCompute(expression.slice(0,i))
            let rightResults = diffWaysToCompute(expression.slice(i + 1,expression.length + 1))
            
            for (const left of leftResults) {
                for (const right of rightResults) {
                    returnArray.push(compute(left,right,char))
                }
            }
        }

    }

    return returnArray
};


console.log(diffWaysToCompute("2-1-1*6+5"))