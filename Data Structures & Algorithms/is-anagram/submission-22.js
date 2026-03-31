class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * O(1) Space Complexity Solution
     * create an array for all lowercase letters in the alphabet where
     * each array index corresponds to the ascii value for that letter
     * 
     * The value of each array will be the number of times it appears
     * 
     * 
     */
    isAnagram(s, t) {
        // Force lowercase to avoid any shenanigans
        s = s.toLowerCase()
        t = t.toLowerCase()


        if(s.length !== t.length) return false 

        // 26 length array filed with 0s 
        const array = new Array(26).fill(0)

        // Have to use a regular for loop iteration as charCodeAt expects 
        // a numerical index whereas for...of loop holds the actual value
        // of that string each "r"
        for(let i = 0; i < s.length; i++){
            // charCodeAt() to check ascii value of a letter
            array[s.charCodeAt(i) - 97]++
            array[t.charCodeAt(i) - 97]--
        }

        for(let num of array){
            if(num !== 0){
                return false
            }
        }

        return true
    }
}