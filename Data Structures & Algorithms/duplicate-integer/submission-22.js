class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * Optimal Solution using Set
     * 
     * Time Complexity: O(n) [worst case you add every element into 
     *                        set then return false due to for loop]
     * 
     * Space Complexity: O(n) [set containing all n elements]
     */
    hasDuplicate(nums) {
        // Create a set to hold all values of array nums
        const mySet = new Set()
        
        for(let num of nums){
            //  Check if set already has the that value, if yes return true
            if(mySet.has(num)){
                return true
            }

            // If set doesn't have the value, add it to the set
            else{
                mySet.add(num)
            }
        }

        return false
    }
}
