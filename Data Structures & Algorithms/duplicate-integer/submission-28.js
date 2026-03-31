class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * Optimal Solution using a dictionary
     */
    hasDuplicate(nums) {
            const map = {}

            // for every value in nums array
            for(let i = 0; i < nums.length; i++){
                let value = nums[i]
            // Check if it is in the dictionary
                if(map[value]){
                    // If it is in the dictionary, return false
                    return true
                }
                else{
                    // If it is not in the dictionary, add it to the dictionary
                    // with a value of 1 to prevent falsy evaluation issues
                    map[value] = 1
                }
            }
            return false
    }
}
