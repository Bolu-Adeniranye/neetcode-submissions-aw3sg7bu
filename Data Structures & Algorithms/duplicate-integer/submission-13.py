class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
         #Loop over array
         #Add every value to a set
         #If the value is already inthe set, return true
         #If the loop continues until the end, return False

        new_set = set()

        for num in nums:
            if num in new_set:
                return True

            new_set.add(num)
        return False
        

