class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        #Create two hashmaps, for the two strings
        #For each hashmap, they key should hold the character of the string, and the value should be the number of times it is in the string
        #At the end, compare the two hashmaps together
        #If the hashmaps are equal, return true, otherwise, return false

        s_hashmap = {}
        t_hashmap = {}

        for char in s:
            s_hashmap[char] = s_hashmap.get(char, 0) + 1

        for char in t:
            t_hashmap[char] = t_hashmap.get(char, 0) + 1

        if s_hashmap == t_hashmap:
            return True
        
        else:
            return False

        
        