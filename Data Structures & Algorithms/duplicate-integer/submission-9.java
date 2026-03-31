class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set hash_Set = new HashSet();

            for (int num: nums) {
                if (hash_Set.contains(num) == false) {
                    hash_Set.add(num);            
                }
                else {
                    return true;
                }
            };
            return false;
        }
    }
