class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * Optimal solution using a set
     */
    hasDuplicate(nums) {
        const mySet = new Set()

        for(let num of nums){
            if(mySet.has(num)){
                return true
            }
            else{
                mySet.add(num)
            }
        }
        return false
    }
}
