class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const count = {}

        // Populate count
        for(let i = 0; i < nums.length; i++){
        // nums[i] contains value, use it as key
        // "i" contains the key, use it as value
            count[nums[i]] = i     
        }


        // Loop through nums again, for each value in nums,
        // subtract from target, if that value exists in the hashmap
        // return that value and num in an array
        for (let i = 0; i < nums.length; i++){
            let complement = target - nums[i]

            if (complement in count && count[complement] !== i){
                return [i, count[complement]]
            }
        }
    }
}
