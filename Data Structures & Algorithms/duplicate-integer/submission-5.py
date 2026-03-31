class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_dict = {}
        i = 0
        for i in range(0, len(nums)):
            if nums[i] in nums_dict:
                return True
            nums_dict[nums[i]] = "hello"
        return False


# Time Complexity: O(n)
# Space Complexity: O(n)