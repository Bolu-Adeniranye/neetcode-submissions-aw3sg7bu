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
            anagram_count[char] = (anagram_count[char] || 0) + 1
        }

        for(let char of t){
            // if the character in string t isn't in the hashmap
            if(!anagram_count[char]){
                return false
            }
            anagram_count[char] = (anagram_count[char]) - 1
            if(anagram_count[char] === 0){
                delete anagram_count[char]
            }
        }

        if(anagram_count.length === 0){
            return true
        }

        return true
    }
}
