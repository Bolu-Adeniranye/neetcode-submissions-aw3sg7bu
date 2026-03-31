class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        #Add both strings to a dictionary (dictionaries cannot have duplicates)
        # If the dictionaries formed from both strings are equal, they are anagrams
        # otherwise, they are not

        s_dict = {}
        t_dict = {}

        for c in s:
            if c not in s_dict:
                # c is the key, the amount of times it appears is the value
                s_dict[c] = 1
            else:
                s_dict[c] += 1

        for c in t:
            if c not in t_dict:
                t_dict[c] = 1
            else:
                t_dict[c] += 1
        
        if t_dict == s_dict:
            return True
        else:
            return False
        