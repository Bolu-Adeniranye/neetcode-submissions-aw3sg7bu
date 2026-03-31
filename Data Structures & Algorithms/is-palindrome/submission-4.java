class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder newS = new StringBuilder();

        // Iterate over each character in the string
        for (char c : s.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                newS.append(Character.toLowerCase(c));
            }
        }

        // Initialize two pointers, left and right
        int l = 0;
        int r = newS.length() - 1;

        // Loop over the new string
        while (l < r) {
            // Compare the values at both pointers
            if (newS.charAt(l) != newS.charAt(r)) {
                return false;
            }

            // Increment left pointer and decrement right pointer
            l++;
            r--;
        }

        // If all characters matched, return true
        return true;
    
    }
}
