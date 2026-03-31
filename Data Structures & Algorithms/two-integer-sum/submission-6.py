class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # nums[i] + nums[j] == target
        # We can rearrange this equation so that target - nums[i] == nums j
        # So, we take a number at index i, subtract it from target, and see if the 
        # resulting number is in the array nums.
        # Since they are looking for O(n) we can use a Hash map where the 
        # index is the value, and the number itself is the key

        # create dict to hold numbers and their positions
        nums_dict = {}

        # loop over nums and add its index and index vaues to nums_dict
        for index, num in enumerate(nums):
            # enumerate() is the cleanest way to access both index and value
            # in an array 
            nums_dict[num] = index
        
        # now we need to loop over the array
        for index, num in enumerate(nums):
            difference = target - num
            if difference in nums_dict and nums_dict[difference] != index:
                return [index, nums_dict[difference]]
        return []
        