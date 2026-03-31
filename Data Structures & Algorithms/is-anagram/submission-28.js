class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * Optimal solution using array of ASCII values
     * 
     * Create an array containing 26 zeros where each index corresponds
     * to the position of a letter  in the alphabet.
     * 
     * For every element in s, find the ascii value, use it as the index
     * and increment the index's value: 0 -> 1 -> 2
     * 
     * For every element in t, do the same thing but decrement the index's
     * value : 2 -> 1 -> 0
     * 
     * This can actually be done in 1 for loop to make life easier
     * 
     * At the end, loop through the array, if any value is not === 0, return false
     */
    isAnagram(s, t) {
        // Security check: if s and t are different lengths, they cannot
        // be anagrams
        if(s.length !== t.length){
            return false
        }

        const alphabetArray = new Array(26).fill(0)

        for(let i = 0; i < s.length; i++){
            alphabetArray[s.charCodeAt(i) - 97]++
            alphabetArray[t.charCodeAt(i) - 97]--
        }

        for(let num of alphabetArray){
            if(num !== 0){
                return false
            }
        }

        return true
    }
}
