/*
 * ============================================================
 * Problem #03: Valid Anagram
 * ============================================================
 *
 * LeetCode: 242
 * Difficulty: Easy
 * Pattern: Hash Map / Frequency Counting
 *
 * ============================================================
 * PROBLEM
 * ============================================================
 *
 * Given two strings s and t, return true if t is an anagram
 * of s, and false otherwise.
 *
 * An anagram contains exactly the same characters with the
 * same frequencies, but the characters may appear in a
 * different order.
 *
 *
 * ============================================================
 * EXAMPLES
 * ============================================================
 *
 * Example 1:
 *
 * Input:
 * s = "anagram"
 * t = "nagaram"
 *
 * Output:
 * true
 *
 *
 * Example 2:
 *
 * Input:
 * s = "rat"
 * t = "car"
 *
 * Output:
 * false
 *
 *
 * Example 3:
 *
 * Input:
 * s = "aacc"
 * t = "ccac"
 *
 * Output:
 * false
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Frequency Counting
 * ---------------------
 *
 * We count how many times each character appears.
 *
 * Example:
 *
 * "aabbc"
 *
 * Frequency:
 *
 * a -> 2
 * b -> 2
 * c -> 1
 *
 *
 * 2. Hash Map / Object
 * --------------------
 *
 * We use an object as a frequency table.
 *
 * The key represents the character.
 *
 * The value represents how many times that character appears.
 *
 *
 * 3. Length Check
 * ---------------
 *
 * Two strings with different lengths can never be anagrams.
 *
 * Therefore, we can immediately return false.
 *
 *
 * 4. Decrementing Frequency
 * -------------------------
 *
 * After counting characters from s, we traverse t.
 *
 * Every character found in t decreases the corresponding
 * frequency.
 *
 * If a character doesn't exist or its count is already zero,
 * t contains a character more times than s.
 *
 *
 * 5. Sequential Loops
 * -------------------
 *
 * Two separate loops do NOT mean O(n²).
 *
 * Example:
 *
 * for (...) {
 * }
 *
 * for (...) {
 * }
 *
 * This is:
 *
 * O(n) + O(n)
 * = O(n)
 *
 *
 * Nested loops would be:
 *
 * for (...) {
 *
 *     for (...) {
 *
 *     }
 *
 * }
 *
 * Which would be:
 *
 * O(n²)
 *
 *
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * Step 1:
 *
 * Check whether s and t have the same length.
 *
 * If not:
 *
 * return false
 *
 *
 * Step 2:
 *
 * Create an empty object to store character frequencies.
 *
 *
 * Step 3:
 *
 * Traverse s.
 *
 * For every character:
 *
 * - If it doesn't exist in the object, initialize it to 1.
 * - Otherwise, increment its count.
 *
 *
 * Step 4:
 *
 * Traverse t.
 *
 * For every character:
 *
 * - Check whether it exists.
 * - Check whether its count is greater than zero.
 *
 * If either condition fails:
 *
 * return false
 *
 *
 * Step 5:
 *
 * Decrease the frequency of the current character.
 *
 *
 * Step 6:
 *
 * If the complete traversal finishes successfully:
 *
 * return true.
 *
 *
 * ============================================================
 * SOLUTION
 * ============================================================
 */

function isAnagram(s, t) {

    /*
     * --------------------------------------------------------
     * Step 1: Length Check
     * --------------------------------------------------------
     *
     * Anagrams must have the same number of characters.
     */

    if (s.length !== t.length) {
        return false;
    }


    /*
     * --------------------------------------------------------
     * Step 2: Frequency Table
     * --------------------------------------------------------
     *
     * Stores the frequency of every character in s.
     */

    const obj = {};


    /*
     * --------------------------------------------------------
     * Step 3: Count Characters in s
     * --------------------------------------------------------
     */

    for (let i = 0; i < s.length; i++) {

        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }

    }


    /*
     * --------------------------------------------------------
     * Step 4: Consume Character Frequencies Using t
     * --------------------------------------------------------
     */

    for (let i = 0; i < t.length; i++) {

        /*
         * If the character doesn't exist in s,
         * t cannot be an anagram.
         *
         * If the count is already zero,
         * t contains the character more times than s.
         */

        if (
            obj[t[i]] === undefined ||
            obj[t[i]] === 0
        ) {
            return false;
        }


        /*
         * Consume one occurrence of the character.
         */

        obj[t[i]]--;

    }


    /*
     * If every character was successfully matched,
     * the strings are anagrams.
     */

    return true;
}


/*
 * ============================================================
 * BASIC TEST
 * ============================================================
 */

console.log(isAnagram("anagram", "nagaram"));
// Expected: true


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * s = "anagram"
 * t = "nagaram"
 *
 *
 * ------------------------------------------------------------
 * PHASE 1: COUNT CHARACTERS IN s
 * ------------------------------------------------------------
 *
 * s = "anagram"
 *
 *
 * Read:
 *
 * a
 *
 * obj:
 *
 * {
 *   a: 1
 * }
 *
 *
 * Read:
 *
 * n
 *
 * obj:
 *
 * {
 *   a: 1,
 *   n: 1
 * }
 *
 *
 * Read:
 *
 * a
 *
 * obj:
 *
 * {
 *   a: 2,
 *   n: 1
 * }
 *
 *
 * Read:
 *
 * g
 *
 * obj:
 *
 * {
 *   a: 2,
 *   n: 1,
 *   g: 1
 * }
 *
 *
 * Read:
 *
 * r
 *
 * obj:
 *
 * {
 *   a: 2,
 *   n: 1,
 *   g: 1,
 *   r: 1
 * }
 *
 *
 * Read:
 *
 * a
 *
 * obj:
 *
 * {
 *   a: 3,
 *   n: 1,
 *   g: 1,
 *   r: 1
 * }
 *
 *
 * Read:
 *
 * m
 *
 * obj:
 *
 * {
 *   a: 3,
 *   n: 1,
 *   g: 1,
 *   r: 1,
 *   m: 1
 * }
 *
 *
 * ------------------------------------------------------------
 * PHASE 2: PROCESS t
 * ------------------------------------------------------------
 *
 * t = "nagaram"
 *
 *
 * Read n:
 *
 * n -> 0
 *
 *
 * Read a:
 *
 * a -> 2
 *
 *
 * Read g:
 *
 * g -> 0
 *
 *
 * Read a:
 *
 * a -> 1
 *
 *
 * Read r:
 *
 * r -> 0
 *
 *
 * Read a:
 *
 * a -> 0
 *
 *
 * Read m:
 *
 * m -> 0
 *
 *
 * Every character matched successfully.
 *
 * Return:
 *
 * true
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * s = "anagram"
 *
 * Frequency Table:
 *
 *      a   n   g   r   m
 *      ↓   ↓   ↓   ↓   ↓
 *      3   1   1   1   1
 *
 *
 * t = "nagaram"
 *
 * Consume:
 *
 * n → 0
 * a → 2
 * g → 0
 * a → 1
 * r → 0
 * a → 0
 * m → 0
 *
 *
 * All frequencies were successfully consumed.
 *
 * Therefore:
 *
 * true
 */


/*
 * ============================================================
 * FAILURE CASE
 * ============================================================
 *
 * Input:
 *
 * s = "rat"
 * t = "car"
 *
 *
 * Frequency of s:
 *
 * r -> 1
 * a -> 1
 * t -> 1
 *
 *
 * Process t:
 *
 * c
 *
 * c does not exist in the frequency table.
 *
 * Therefore:
 *
 * return false
 */


/*
 * ============================================================
 * ANOTHER FAILURE CASE
 * ============================================================
 *
 * Input:
 *
 * s = "aacc"
 * t = "ccac"
 *
 *
 * Frequency of s:
 *
 * a -> 2
 * c -> 2
 *
 *
 * Process t:
 *
 * c -> 1
 * c -> 0
 * a -> 1
 * c -> -1
 *
 *
 * When the third c is encountered,
 * its frequency is already zero.
 *
 * Therefore:
 *
 * return false
 */


/*
 * ============================================================
 * WHY DO WE CHECK LENGTH FIRST?
 * ============================================================
 *
 * Consider:
 *
 * s = "abc"
 * t = "abcd"
 *
 * Even before counting characters, we know they cannot
 * be anagrams.
 *
 * An anagram must contain exactly the same number of
 * characters.
 *
 * Therefore:
 *
 * if (s.length !== t.length) {
 *     return false;
 * }
 *
 * This is an early optimization.
 */


/*
 * ============================================================
 * WHY NOT USE A SET?
 * ============================================================
 *
 * A Set only tells us whether a character exists.
 *
 * Example:
 *
 * s = "aacc"
 *
 * Set:
 *
 * {a, c}
 *
 * We lose the frequency information.
 *
 * But anagrams require:
 *
 * Same characters
 * +
 * Same frequencies
 *
 * Therefore we need a frequency table.
 *
 * A Map or Object is appropriate.
 */


/*
 * ============================================================
 * OBJECT VS MAP
 * ============================================================
 *
 * Both can be used for frequency counting.
 *
 *
 * Object:
 *
 * const count = {};
 *
 * count[ch] = ...
 *
 *
 * Map:
 *
 * const count = new Map();
 *
 * count.set(ch, ...)
 *
 *
 * For this problem, both approaches are valid.
 *
 * Your solution uses an Object.
 */


/*
 * ============================================================
 * BRUTE FORCE VS OPTIMAL
 * ============================================================
 *
 * BRUTE FORCE APPROACH
 * --------------------
 *
 * One possible approach is:
 *
 * 1. Convert both strings into arrays.
 * 2. Sort both arrays.
 * 3. Compare the sorted strings.
 *
 *
 * Example:
 *
 * "anagram"
 *
 * becomes:
 *
 * "aaagmnr"
 *
 *
 * "nagaram"
 *
 * also becomes:
 *
 * "aaagmnr"
 *
 *
 * Then compare them.
 *
 *
 * Time Complexity:
 *
 * O(n log n)
 *
 * because sorting is required.
 *
 *
 * ------------------------------------------------------------
 *
 * OPTIMAL APPROACH
 * ----------------
 *
 * Use frequency counting.
 *
 * We only need to traverse the strings.
 *
 * Time:
 *
 * O(n)
 *
 *
 * This is better than sorting.
 */


/*
 * ============================================================
 * INTERVIEW EXPLANATION
 * ============================================================
 *
 * "I first check whether both strings have the same length.
 * If their lengths are different, they cannot be anagrams,
 * so I immediately return false.
 *
 * Then I use an object as a frequency table to count how many
 * times each character appears in the first string.
 *
 * Next, I traverse the second string and decrease the frequency
 * of each character.
 *
 * If a character doesn't exist in the frequency table, or its
 * count is already zero, it means the second string contains
 * that character more times than the first string, so I return
 * false.
 *
 * If I successfully process the entire second string, both
 * strings contain exactly the same characters with the same
 * frequencies, so I return true.
 *
 * The solution takes O(n) time because we make two sequential
 * passes through the strings.
 *
 * The space complexity is O(1) when the character set is fixed,
 * such as lowercase English letters. Otherwise, it can be O(n)
 * for an unrestricted character set."
 */


/*
 * ============================================================
 * COMMON INTERVIEW FOLLOW-UP QUESTIONS
 * ============================================================
 *
 * Q1. Why can't we use a Set?
 *
 * Answer:
 *
 * A Set only stores whether a character exists.
 * It does not store how many times the character occurs.
 *
 * Anagrams require matching frequencies, so we need a
 * frequency table using an Object or Map.
 *
 *
 * ------------------------------------------------------------
 *
 * Q2. Why is your solution O(n) and not O(n²)?
 *
 * Answer:
 *
 * The two loops are sequential, not nested.
 *
 * First:
 *
 * O(n)
 *
 * Second:
 *
 * O(n)
 *
 * Therefore:
 *
 * O(n) + O(n) = O(n)
 *
 *
 * ------------------------------------------------------------
 *
 * Q3. Can we solve this using sorting?
 *
 * Answer:
 *
 * Yes.
 *
 * We can sort both strings and compare them.
 *
 * However, sorting takes O(n log n), so frequency counting
 * provides a better O(n) solution.
 *
 *
 * ------------------------------------------------------------
 *
 * Q4. Why do we check the string lengths first?
 *
 * Answer:
 *
 * Anagrams must contain the same number of characters.
 * If the lengths are different, we can immediately return
 * false without doing any frequency counting.
 *
 *
 * ------------------------------------------------------------
 *
 * Q5. Can we use Map instead of Object?
 *
 * Answer:
 *
 * Yes.
 *
 * Map is especially useful when keys are not limited to
 * strings or when we want explicit Map semantics.
 *
 *
 * ------------------------------------------------------------
 *
 * Q6. What is the space complexity?
 *
 * Answer:
 *
 * If the character set is fixed, such as 26 lowercase English
 * letters, the maximum number of stored keys is constant,
 * so space is O(1).
 *
 * If the character set is unrestricted, space can be O(n).
 */


/*
 * ============================================================
 * EDGE CASES
 * ============================================================
 */

/*
 * 1. Empty strings
 *
 * "" and ""
 *
 * Expected:
 * true
 */

console.log(isAnagram("", ""));
// Expected: true


/*
 * 2. Different lengths
 *
 * "a"
 * "ab"
 *
 * Expected:
 * false
 */

console.log(isAnagram("a", "ab"));
// Expected: false


/*
 * 3. Same character
 *
 * "a"
 * "a"
 *
 * Expected:
 * true
 */

console.log(isAnagram("a", "a"));
// Expected: true


/*
 * 4. Different character
 *
 * "a"
 * "b"
 *
 * Expected:
 * false
 */

console.log(isAnagram("a", "b"));
// Expected: false


/*
 * 5. Repeated characters
 *
 * "aacc"
 * "ccac"
 *
 * Expected:
 * false
 */

console.log(isAnagram("aacc", "ccac"));
// Expected: false


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(isAnagram("anagram", "nagaram"));
// Expected: true

console.log(isAnagram("rat", "car"));
// Expected: false

console.log(isAnagram("aacc", "ccac"));
// Expected: false

console.log(isAnagram("a", "a"));
// Expected: true

console.log(isAnagram("a", "b"));
// Expected: false

console.log(isAnagram("", ""));
// Expected: true

console.log(isAnagram("listen", "silent"));
// Expected: true

console.log(isAnagram("hello", "world"));
// Expected: false

console.log(isAnagram("abcabc", "cbacba"));
// Expected: true

console.log(isAnagram("aabbcc", "abcabc"));
// Expected: false


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * true
 * false
 * false
 * true
 * false
 * true
 * true
 * false
 * true
 * false
 */


/*
 * ============================================================
 * TIME & SPACE COMPLEXITY
 * ============================================================
 *
 * Let n be the length of the strings.
 *
 *
 * Time Complexity:
 *
 * O(n)
 *
 * We traverse s once and t once.
 *
 * These are sequential operations:
 *
 * O(n) + O(n)
 * = O(n)
 *
 *
 * Space Complexity:
 *
 * O(1)
 *
 * when the character set is fixed.
 *
 * For an unrestricted character set:
 *
 * O(n)
 */


/*
 * ============================================================
 * IMPORTANT INTERVIEW CONCEPTS
 * ============================================================
 *
 * 1. Frequency Counting
 * 2. Hash Map
 * 3. Object as Hash Table
 * 4. Character Frequency
 * 5. Early Return
 * 6. Input Validation
 * 7. Sequential Loops
 * 8. O(n) Time
 * 9. O(1) Space with Fixed Alphabet
 * 10. Brute Force vs Optimal
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * When a problem asks:
 *
 * "How many times does each element occur?"
 *
 * Think:
 *
 * Frequency Map
 *
 *
 * General pattern:
 *
 * 1. Create a frequency table.
 * 2. Traverse the input.
 * 3. Increase or decrease counts.
 * 4. Use the counts to determine the answer.
 *
 *
 * This pattern is extremely useful for:
 *
 * • Anagrams
 * • Character frequency problems
 * • Finding duplicates
 * • Finding most frequent elements
 * • Comparing two collections
 * • Counting occurrences
 *
 *
 * ============================================================
 * END
 * ============================================================
 */