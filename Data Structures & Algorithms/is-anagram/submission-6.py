class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_hashmap = {}
        t_hashmap = {}

        for char in s:
            if char not in s_hashmap:
                s_hashmap[char] = 1
            else:
                s_hashmap[char] += 1


        for char in t:
            if char not in t_hashmap:
                t_hashmap[char] = 1
            else:
                t_hashmap[char] += 1

        if t_hashmap == s_hashmap:
            return True
            
        return False

# Time Complexity: O(n)
# Space Complexity: O(n)