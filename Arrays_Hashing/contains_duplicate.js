// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
function containsDuplicate(nums) {
    const uniqueSet = new Set()

    for (const num of nums) {
        if (uniqueSet.has(num)) {
            return true
        }
        uniqueSet.add(num)
    }
    return true
}
containsDuplicate([1, 2, 1, 3, 2, 3, 1])

