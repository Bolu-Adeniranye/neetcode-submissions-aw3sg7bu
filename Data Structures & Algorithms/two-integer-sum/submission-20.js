class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * Better solution(?):
     * We can: loop over nums and add every element into a hash map, where:
     *      key: value from nums array
     *      value: index from nums array
     * 
     * Then loop over nums again, and for each value in nums:
     *      subtract current nums value from target to get complementary key
     *      check if complementary key is in the dictionary
     *      if it is, and it's value is not the same as the current index
     *      of nums, return [i,j] where i = current index of nums and j
     *      = the value at that dictionary key
     *      
     * 
     */
    twoSum(nums, target) {
        const map = {}

        for(let i = 0; i < nums.length; i++){
            // map value to index in hashmap
            map[nums[i]] = i
        }

        for(let i = 0; i < nums.length; i++){
            // map[complement] is a key here
            let complement = target - nums[i]

            if(complement in map && map[complement] !== i){
                return [i, map[complement]]
            }
        }
    }
}
