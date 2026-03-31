class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        # Loop over the string and filter out the alphanumeric characters into a new string
        new_s = []

        for char in s:
            if char.isalnum():
                new_s.append(char.lower())
            


        # Initialize two pointers, left and right, and set them to the first and last index of the string 's'
        l,r = 0, len(new_s) - 1

        # Loop over the new string: decrementing the right pointer by 1 and increment the left pointer by one every loop
        # The loop should end when both pointers are at the same index
        while l < r:
        # Within the loop, compare the value's held by both pointers:
            # if they are not equal, exit the loop and return false

            if new_s[l] != new_s[r]:
                return False

            # if the values are equal, continue the loop.
            else: 
                l += 1
                r -= 1
        return True


