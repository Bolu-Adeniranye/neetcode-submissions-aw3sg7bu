class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * Brute force solution: Sorting and then comparing
     * 
     * For python I would be able to create two hashmaps and then compare,
     * but JavaScript compare with objects doesn't work
     * 
     * What I can do is a sort of add-> delete 
     * 
     * I have to use a dictionary to keep track of repeating letters
     */
    isAnagram(s, t) {
        //  If both strings are different lengths, they aren't anagrams
        if(s.length !== t.length) return false

        const anagram_count = {}

        // Using "let" makes char function scoped, so the value can be changed
        for(let char of s){
            // Javascript's way of changing the value of a dictionary key 
            // using temporary values

            // I can't use (++) here because 0 is a temporary value
            // ++ can only be used on variables or object properties
            anagram_count[char] = (anagram_count[char] || 0) + 1
        }

        for(let char of t){
            // if the value of that character is 0, or the character isn't in
            // the hashmap at all they aren't anagrams
            if(!anagram_count[char]){
                return false
            }

            anagram_count[char]--
        }
        return true
    }
}
