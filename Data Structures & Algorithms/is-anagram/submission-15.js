class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sorted_s = s.split('').sort().join('')
        let sorted_t = Array.from(t).sort().join('')
        if(sorted_s === sorted_t) {
            return true
        }
        else{
            return false
        }
    }
}
