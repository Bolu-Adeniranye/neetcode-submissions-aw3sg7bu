class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /**
         * Brute force approach
         * Compare each element to the next and keep going
         * Time Complexity: O(n^2)(due to the use of 2 layer nested for loops)
         * Space Complexity: O(1) no extra memory used
         * 
         */
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] === nums[j]) {
                    return true
                }
            }
        }
        return false
    }
}
