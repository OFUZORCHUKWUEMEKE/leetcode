// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat"

function isAnagram(s, t) {
    // Check if the lengths of the two strings are different
    if (s.length !== t.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const charCountS = new Map();
    const charCountT = new Map();

    // Count the frequency of each character in string s
    for (const char of s) {
        charCountS.set(char, (charCountS.get(char) || 0) + 1);
    }

    // Count the frequency of each character in string t
    for (const char of t) {
        charCountT.set(char, (charCountT.get(char) || 0) + 1);
    }

    // Compare character frequencies in both maps
    for (const [char, count] of charCountS) {
        if (charCountT.get(char) !== count) {
            return false;
        }
    }

    // If we reach this point, t is an anagram of s
    return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false
