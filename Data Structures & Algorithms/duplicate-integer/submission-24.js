class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * Solution using Dictionary
     * 
     * Time complexity: O(n) cuz of "for loop" hashmap lookup only takes O(1)
     * Space complexity: O(n) cuz of dictionary usage
     * 
     */
    hasDuplicate(nums) {
        // Declare hashmap
        const count = {}

        // Using for... of
        for(let num of nums){
            // Truthy value usage (if count[num] already exists)
            if(count[num]){
                return true
            }
            else {
                // Create count[num] with a value of 1
                // Using 0 will result in a falsy value always wheni check
                count[num] = 1
            }
        }

        return false
        
    }
}
