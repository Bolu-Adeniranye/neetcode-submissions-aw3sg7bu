class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_dict = {}
        freq = [[] for i in range(len(nums) + 1)]

        for num in nums:
            count_dict[num] = 1 + count_dict.get(num, 0)
        
        for num, count in count_dict.items():
            # append the num to the array stored in the index that corresponds to it''s count
            freq[count].append(num)

        print(freq)
        output_arr = []
        for i in range(len(freq) - 1, 0, -1):
            if len(freq[i]) == 0:
                continue
            else:
                while len(freq[i]) != 0 and len(output_arr) != k:
                    output_arr.append(freq[i].pop())
        return output_arr

