class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Loop over string and filter all alphanumeric characters into a new string

        #Place two pointers at the start and end of the string
        
        #Loop over the string, incrementing the left counter and decrementing the right counter

        # At every loop, check if the character both pointers are looking at is the same

        # If the characters aren't the same, return false

        #once both pointers are at the same index, return true

        s_filter = []

        for char in s:
            if char.isalnum():
                s_filter.append(char.lower())

        l = 0
        r = len(s_filter) - 1

        while l < r:
            if s_filter[l] != s_filter[r]:
                return False
            
            l+=1
            r-=1
        return True
        
        