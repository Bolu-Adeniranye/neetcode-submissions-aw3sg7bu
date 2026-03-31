class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # Initialize a new set
        new_set = set()

        #Loop over the array, if an item in the array is not in the set, add it to the set
        for num in nums:
            if num not in new_set:
                new_set.add(num)
            else:
                return True     
        return False



        #otherwise, return false

                        
            