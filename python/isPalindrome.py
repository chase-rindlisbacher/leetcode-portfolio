# 9. Palindrome Number
# Given an integer x, return true if x is a palindrome, and false otherwise.

class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        leftIndex = 0
        rightIndex = len(string) - 1
        stringSize = len(string)

        while leftIndex < stringSize // 2:
            if (string[leftIndex] != string[rightIndex]):
                return False
            
            leftIndex += 1
            rightIndex -= 1
        if len(string) == 0:
            return False
        return True