class Solution:
    def findMin(self, nums: List[int]) -> int:
        min_element = nums[0]

        for num in nums:
            if num < min_element:
                min_element = num
            else:
                continue
        return min_element

        