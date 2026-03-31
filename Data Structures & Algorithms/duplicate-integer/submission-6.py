class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # Create Dictionary
        nums_dict = set()

        # Iterate over array, If a  value is not in the dictionary, add it to the dictionary and initialize count as 0
        for num in nums:
            if num not in nums_dict:
                nums_dict.add(num)

        # If a value is already in the dictionary, return True
            elif num in nums_dict: 
                return True

        # If there is no repeated value, return false
        return False


            
        

                
         