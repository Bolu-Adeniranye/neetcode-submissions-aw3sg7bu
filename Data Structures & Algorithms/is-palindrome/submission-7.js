class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * Two pointer question.
     * 
     * Note that it is case insensitive and ignores non-alphanum
     * characters.
     * 
     * take the string s and create a new string of only alphanumerical 
     * characters. then compare it to it's reversed version and see if they
     * equal each other
     * 
     * JavaScript doesn't have a way to check for alpha num, so I use a regular Expression
     */
    isPalindrome(s) {
        let newStr = ""

        let regExp = /^[a-z0-9]/i

        for(let char of s){
            if(char.match(regExp)){
                newStr += char.toLowerCase()
            }
        } 

        console.log(newStr)

        if(newStr == newStr.split('').reverse().join('')){
            return true
        }
        else{
            return false
        }
    }
}
