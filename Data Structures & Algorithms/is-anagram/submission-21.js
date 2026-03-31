class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * Sorting Solution (brute force)
     * 
     * Time complexity: sorting takes [O(log n)] for every 'n' element in s and t
     *  = O(n log n) + n (for loop iteration over n elements)
     *  = O(n log n)
     * 
     * Space complexity = O(n) because of the use of 2 variables holding an array of n elements
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const sorted_s = s.split('').sort().join('')
        const sorted_t = Array.from(t).sort().join('')

        for(let i = 0; i < sorted_s.length; i++){
            if(sorted_s[i] !== sorted_t[i]){
                return false
            }
        }
        return true
    }
}
