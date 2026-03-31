class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * 
     * Brute force approach using nested for loop;
     * Time Complexity: O(n^2)
     * Space Complexity: O(1) (no extra memory used)
     */
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false
    }
}
