class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_dict = {} # A dict to hold the sorted strings and array of unsorted strings as key:value pairs
        for s in strs: # Iterating through each string in "strs" array
            sorted_string = ''.join(sorted(s)) #sorted() the string into a list, then ''.join() converts it back to a string
            if sorted_string not in anagrams_dict:
                anagrams_dict[sorted_string] = [] # create an empty array value in the dictionary
                anagrams_dict[sorted_string].append(s) # append the unsorted word into the empty array
            else:
                anagrams_dict[sorted_string].append(s) # you have found an anagram, append that word to the array

        print(anagrams_dict.values()) # test print function
        return list(anagrams_dict.values()) # list() ensures the output is an array, .values() returns only the values in the dictionary as an array also

        # Final return value is list[list[strings]]

