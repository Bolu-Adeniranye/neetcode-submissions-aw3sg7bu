class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_hashmap = {}
        t_hashmap = {}

        for letter in s:
            s_hashmap[letter] = s_hashmap.get(letter, 0) + 1

        for letter in t:
            t_hashmap[letter] = t_hashmap.get(letter, 0) + 1

        if s_hashmap == t_hashmap:
            return True
        else:
            return False


