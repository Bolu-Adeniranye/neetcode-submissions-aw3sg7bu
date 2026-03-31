class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * 
     * Brute force solution O(n^2) using nested for
     * loops to check each individualt element in nums
     * Space complexit:O(1) because no additional memory was used
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
