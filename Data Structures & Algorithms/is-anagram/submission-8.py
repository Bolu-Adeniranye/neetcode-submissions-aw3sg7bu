class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_hashmap = {}
        t_hashmap = {}

        for char in s:
            s_hashmap[char] = s_hashmap.get(char, 0) + 1

        for char in t:
            t_hashmap[char] = t_hashmap.get(char, 0) + 1

        if t_hashmap == s_hashmap:
            return True

        return False

# Time Complexity: O(n)
# Space Complexity: O(n)