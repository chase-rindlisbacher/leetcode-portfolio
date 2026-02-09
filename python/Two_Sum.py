"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
"""

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []
        for index1 in range(0,len(nums)):
            for index2 in range(index1 + 1,len(nums)):
                if nums[index1] + nums[index2] == target:
                    result.append(index1)
                    result.append(index2)
                    return result
        return result
    