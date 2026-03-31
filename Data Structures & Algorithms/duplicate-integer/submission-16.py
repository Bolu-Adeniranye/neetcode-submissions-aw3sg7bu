class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_dict = set()

        for num in nums:
            if num not in nums_dict:
                nums_dict.add(num)
            else:
                return True
        return False