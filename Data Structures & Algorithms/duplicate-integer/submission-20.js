class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dictionary = {}

        for(let num of nums) {
            // truthy/falsy evaluation here
            if(dictionary[num]){
                return true
            }
            else{
                // Be wary of truthy and falsy values when using 0
                dictionary[num] = 5
            }
        }
        return false
    }
}
