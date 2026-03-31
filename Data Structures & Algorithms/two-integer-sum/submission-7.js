class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     *  Brute force Solution: force search with nested for loop
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return [i,j]
                }
            }
        }
    }
}
