class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /* Optimal Solution using Sets instead of Dictionaries

            Note that with a Set, you must use .has() to check if a value
            is in it, and .add() to add to a set
         */
        const mySet = new Set();
        for(let num of nums){
            if(mySet.has(num)){
                return true;
            }
            else {
                mySet.add(num);
            }
        }
        return false
    }
}
