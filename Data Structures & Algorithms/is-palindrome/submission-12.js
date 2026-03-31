class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0
        let j = s.length - 1

        const regExp = /^[a-z0-9]/i

        while(i < j){
            while( i < j && !regExp.test(s[i])){
                i++
            }
            while( i < j && !regExp.test(s[j])){
                j--
            }
            if(s[i].toLowerCase() === s[j].toLowerCase()){
                i++
                j--
            }
            else{
                return false
            }
        }
        return true
    }
}
