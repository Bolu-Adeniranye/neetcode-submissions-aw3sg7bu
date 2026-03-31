class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * Brute force: Sort then compare each letter in s to letter in t
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        s = s.split('').sort().join('')
        t = Array.from(t).sort().join('')

        for(let i = 0; i < s.length; i++){
            if(s[i] !== t[i]){
                return false
            }
        }

        return true
    }
}
