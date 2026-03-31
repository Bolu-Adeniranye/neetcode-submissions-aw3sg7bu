class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = ""

        const regExp = /^[a-z0-9]/i

        for(let char of s){
            if(char.match(regExp)){
                newStr += char.toLowerCase()
            }
        }

        if(newStr == newStr.split('').reverse().join('')){
            return true
        }
        else{
            return false
        }
    }
}
