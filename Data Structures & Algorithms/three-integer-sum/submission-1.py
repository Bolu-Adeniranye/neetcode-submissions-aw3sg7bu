class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        triplets = []

        # Iterate through the array
        for i in range(len(nums) - 2):
            # Skip duplicates for the first element of the triplet
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            # Initialize two pointers
            left, right = i + 1, len(nums) - 1

            # Use two pointers to find the remaining two elements
            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]

                if current_sum == 0:
                    # Found a triplet
                    triplets.append([nums[i], nums[left], nums[right]])

                    # Skip duplicates for the second element of the triplet
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    # Skip duplicates for the third element of the triplet
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    # Move the pointers after finding a valid triplet
                    left += 1
                    right -= 1
                elif current_sum < 0:
                    # Need a larger sum, move the left pointer to the right
                    left += 1
                else:
                    # Need a smaller sum, move the right pointer to the left
                    right -= 1

        return triplets

