class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const count = {}

        // Using for... of because it directly loops over object and array values
        // and ignores indices and other inherited properties unlike for... in
        for(let char of s){
            // Fancy way of incrementing an object's value using temp values
            count[char] = (count[char] || 0) + 1
        }

        for(let char of t){
            // Checks if the character exists not
            if(!count[char]){
                return false
            }

            // When this value hits 0, it becomes falsy, gets flipped to true
            // using above if block, and returns false
            count[char]--
        }

        return true
    }
}
