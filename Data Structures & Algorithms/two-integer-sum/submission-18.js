class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const count = {}

        for(let i = 0; i < nums.length; i++){
            count[nums[i]] = i
        }

        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i]

            if(complement in count && count[complement] !== i){
                return [i, count[complement]]
            }
        }
    }
}
