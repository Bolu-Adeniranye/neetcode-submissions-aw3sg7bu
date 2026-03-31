class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * i and j such that nums[i] + nums[j] == target AND i != j
     * 
     * Brute force: Directly compare each
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i, j]
                }
            }
        }
    }
}
