/**
 * @param {number} num
 * @return {string}
 */

/*
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.
*/

var intToRoman = function(num) {
    let numRemaining = num // I will subtract from this number repeatedly during a loop until the remainder is 0
    let stringVersion = `${numRemaining}` // I will reassign this value as numRemaining changes and will use it to see when a 4 or 9 is in the first position
    let romanNum = "" // I will append the determined Roman Numerals to this string
    const romanDic = { // I will use this to choose which Roman Numeral to append
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    if (numRemaining >= 1000) {
        while (numRemaining >= 1000) { // run until the numRemaining is under 1000
            romanNum += romanDic[1000] // append M 
            numRemaining -= 1000; // subtract from number
            stringVersion = `${numRemaining}` // change to string (will be used for positional access of numbers)
        }
    }
    if (numRemaining >= 500) {
        while (numRemaining >= 500) { // run until numRemaining is under 500
            if (stringVersion[0] == 9) {
                romanNum += romanDic[900]
                numRemaining -= 900;
                stringVersion = `${numRemaining}`
            }
            else {
                romanNum += romanDic[500]
                numRemaining -= 500
                stringVersion = `${numRemaining}`
            }
        }
    }
    if (numRemaining >= 100) {
        while (numRemaining >= 100) { // run until numRemaing is under 100
            if (stringVersion[0] == 4) {
                romanNum += romanDic[400]
                numRemaining -= 400
                stringVersion = `${numRemaining}`
            }
            else {
                romanNum += romanDic[100]
                numRemaining -= 100
                stringVersion = `${numRemaining}`
            }
        }
    }
    if (numRemaining >= 50) {
        while (numRemaining >= 50) { // run until numRemaining is under 50
            if (stringVersion[0] == 9) {
                romanNum += romanDic[90]
                numRemaining -= 90
                stringVersion = `${numRemaining}`
            }
            else {
                romanNum += romanDic[50]
                numRemaining -= 50
                stringVersion = `${numRemaining}`
            }
        }
    }
    if (numRemaining >= 10) {
        while (numRemaining >= 10) { // run until numRemaining is under 10
            if (stringVersion[0] == 4) {
                romanNum += romanDic[40]
                numRemaining -= 40
                stringVersion = `${numRemaining}`
            }
            else {
                romanNum += romanDic[10]
                numRemaining -= 10
                stringVersion = `${numRemaining}`
            }
        }
    }
    if (numRemaining >= 5) {
        while (numRemaining >= 5) { // run until numRemaining is under 5
            if (stringVersion[0] == 9) {
                romanNum += romanDic[9]
                numRemaining -= 9
                stringVersion = `${numRemaining}`
            }
            else {
                romanNum += romanDic[5]
                numRemaining -= 5
                stringVersion = `${numRemaining}`
            }
        }
    }
    if (numRemaining >= 1) {
        while (numRemaining >= 1) { // run until numRemaining is 0
            if (stringVersion[0] == 4) {
                romanNum += romanDic[4]
                numRemaining -= 4
                stringVersion = `${numRemaining}`
            }
            else {
                romanNum += romanDic[1]
                numRemaining -= 1
                stringVersion = `${numRemaining}`
            }
        }
    }
    return romanNum
};

// Same idea but much easier to read and way more maintainable
var intToRoman2 = function(num) {
    const romanDic = { // I will use this to choose which Roman Numeral to append
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    const romanArray = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ];
    let romanNumeral = ""

    for (const number of romanArray) {
        while (num >= number) {
            num -= number
            romanNumeral += romanDic[number]
        }
    }

    return romanNumeral
}

const testCases = [
    3987,
    1,
    495,
    634,
    978,
    30,
    49,
    3999,
    3499,
    2500,
    2312
]

for(const test of testCases) {
    console.log(`Formula 1:${intToRoman(test)}`)
}
console.log("\n")
for (const test of testCases) {
    console.log(`Formula 2:${intToRoman2(test)}`);
}
