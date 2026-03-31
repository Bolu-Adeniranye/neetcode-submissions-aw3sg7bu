class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const count = {}
            
        for (let i = 0; i < nums.length; i++){
            // i = indices, but needs to be the value
            // nums[i] = value, needs to be the key
            count[nums[i]] = i
        }

        /*  Now we are looping through nums again
            i = index
            nums[i] = value at index i
            complement = value (key in dictionary)
            count[complement] =  index (value in dictionary)
            nums[i] =  value (key in dictionary)
        */
        for (let i = 0; i< nums.length; i++){
            let complement = target - nums[i]

            if(complement in count && count[complement] !== i){
                return [i, count[complement]]
            }
        }
    }
}
