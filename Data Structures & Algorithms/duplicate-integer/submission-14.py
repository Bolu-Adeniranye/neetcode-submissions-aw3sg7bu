class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # Initialize an empty set to keep track of seen numbers.
        new_set = set()

        # Loop over each number in the array.
        for num in nums:
            # Check if the number is already in the set.
            if num in new_set:
                # If the number is found in the set, it is a duplicate; return True.
                return True

            # If the number is not in the set, add it to the set.
            new_set.add(num)
        
        # If the loop completes without finding any duplicates, return False.
        return False


