class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * Solution using hashmap
     * 
     * Loop through s, add every char in s to the hashmap,
     * keeping track of how many times each character shows up
     * 
     * then loop through t, and "cross out" every character in t from
     * the hashmap made using s
     * 
     * This works because when a value in a hashmap reaches "0", Javascript
     * evaluates that 0 into a false, which we can use to show that t has an extra
     * letter than s; meaning they aren't anagrams.
     * 
     * When over, return true
     * 
     */
    isAnagram(s, t) {
        // If s and t aren't the same length, they aren't anagrams

        if(s.length !== t.length){
            return false
        }

        const characterMap = {}
        
        // Populate hashmap with key(character) and value(repetition)
        for(let char of s){
            characterMap[char] = (characterMap[char] || 0) + 1
        }

        // Now loop over t and "decrement" the hashmap
        for(let char of t){
            // If the character is not in hashmap OR value is already 0, return
            // false
            if(!characterMap[char]){
                return false
            }
            characterMap[char]--
        }

        return true
    }
}
