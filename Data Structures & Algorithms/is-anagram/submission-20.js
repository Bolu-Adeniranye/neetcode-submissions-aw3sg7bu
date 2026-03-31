class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * Sorting Solution (brute force)
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
