class Solution:
    def findMin(self, nums: List[int]) -> int:
        start, end = 0, len(nums) - 1

        # If array isn't roatated

        if nums[start] < nums[end]:
            return nums[start]
        
        while start < end:
            mid = start + (end - start) // 2

            if nums[mid] > nums[end]:
                start = mid + 1
            
            else: 
                end = mid
        return nums[start]

        