/* Leetcode 13. Roman to Integer */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanDic = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanDic[s[i]];
        const next = romanDic[s[i + 1]];
        
        if (next > current) {
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }
    
    return total;
};