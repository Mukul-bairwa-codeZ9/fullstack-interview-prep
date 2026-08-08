/*
 * ============================================================
 * Problem #17: First Unique Character in a String
 * ============================================================
 *
 * LeetCode: 387
 * Difficulty: Easy
 * Pattern: Hash Map / Frequency Counting
 *
 * ============================================================
 * PROBLEM
 * ============================================================
 *
 * Given a string s, find the first non-repeating character
 * and return its index.
 *
 * If no unique character exists, return -1.
 *
 *
 * ============================================================
 * EXAMPLES
 * ============================================================
 *
 * Example 1:
 *
 * Input:
 * "leetcode"
 *
 * Output:
 * 0
 *
 * Explanation:
 *
 * 'l' appears only once and is the first unique character.
 *
 *
 * Example 2:
 *
 * Input:
 * "loveleetcode"
 *
 * Output:
 * 2
 *
 * Explanation:
 *
 * 'v' is the first character that appears only once.
 *
 *
 * Example 3:
 *
 * Input:
 * "aabb"
 *
 * Output:
 * -1
 *
 * Explanation:
 *
 * Every character appears more than once.
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Frequency Counting
 * ---------------------
 *
 * We count how many times every character appears.
 *
 * Example:
 *
 * "leetcode"
 *
 * l -> 1
 * e -> 3
 * t -> 1
 * c -> 1
 * o -> 1
 * d -> 1
 *
 *
 * 2. Hash Map / Object
 * --------------------
 *
 * We use an object as a frequency table.
 *
 * Character:
 *     Key
 *
 * Frequency:
 *     Value
 *
 *
 * 3. Two-Pass Algorithm
 * ---------------------
 *
 * First pass:
 *
 * Count the frequency of every character.
 *
 *
 * Second pass:
 *
 * Traverse from left to right and find the first character
 * whose frequency is exactly 1.
 *
 *
 * 4. Why Two Passes?
 * ------------------
 *
 * We cannot determine whether a character is unique simply
 * by looking at it once.
 *
 * We need to know its total frequency in the entire string.
 *
 * After knowing the frequencies, we traverse again to find
 * the first unique character.
 *
 *
 * 5. First Unique Character
 * -------------------------
 *
 * The word "first" is important.
 *
 * We must preserve the original order of the string.
 *
 * Therefore, the second traversal must go from left to right.
 *
 *
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * Step 1:
 *
 * Create an empty object to store character frequencies.
 *
 *
 * Step 2:
 *
 * Traverse the string.
 *
 * For every character:
 *
 * - If it doesn't exist, initialize its count to 1.
 * - Otherwise, increment its count.
 *
 *
 * Step 3:
 *
 * Traverse the string again from left to right.
 *
 *
 * Step 4:
 *
 * If:
 *
 * obj[s[i]] === 1
 *
 * return the current index.
 *
 *
 * Step 5:
 *
 * If no unique character is found:
 *
 * return -1.
 *
 *
 * ============================================================
 * SOLUTION
 * ============================================================
 */

var firstUniqChar = function (s) {

    /*
     * --------------------------------------------------------
     * Step 1: Create Frequency Table
     * --------------------------------------------------------
     */

    let obj = {};


    /*
     * --------------------------------------------------------
     * Step 2: Count Every Character
     * --------------------------------------------------------
     */

    for (let i = 0; i < s.length; i++) {

        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        }
        else {
            obj[s[i]]++;
        }

    }


    /*
     * --------------------------------------------------------
     * Step 3: Find First Character With Frequency 1
     * --------------------------------------------------------
     *
     * We traverse from left to right.
     *
     * Therefore, the first character with frequency 1
     * is automatically the first unique character.
     */

    for (let i = 0; i < s.length; i++) {

        if (obj[s[i]] === 1) {
            return i;
        }

    }


    /*
     * --------------------------------------------------------
     * No Unique Character Found
     * --------------------------------------------------------
     */

    return -1;
};


/*
 * ============================================================
 * BASIC TEST
 * ============================================================
 */

console.log(firstUniqChar("leetcode"));
// Expected: 0


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * s = "leetcode"
 *
 *
 * ------------------------------------------------------------
 * PHASE 1: COUNT FREQUENCIES
 * ------------------------------------------------------------
 *
 * String:
 *
 * l e e t c o d e
 *
 *
 * After processing:
 *
 * l -> 1
 * e -> 3
 * t -> 1
 * c -> 1
 * o -> 1
 * d -> 1
 *
 *
 * Frequency Table:
 *
 * {
 *     l: 1,
 *     e: 3,
 *     t: 1,
 *     c: 1,
 *     o: 1,
 *     d: 1
 * }
 *
 *
 * ------------------------------------------------------------
 * PHASE 2: FIND FIRST UNIQUE CHARACTER
 * ------------------------------------------------------------
 *
 * Index 0:
 *
 * l
 *
 * Frequency:
 *
 * 1
 *
 * Therefore:
 *
 * return 0
 */


/*
 * ============================================================
 * SECOND TRACE
 * ============================================================
 *
 * Input:
 *
 * s = "loveleetcode"
 *
 *
 * Frequency Table:
 *
 * l -> 2
 * o -> 2
 * v -> 1
 * e -> 4
 * t -> 1
 * c -> 1
 *
 *
 * Second traversal:
 *
 * index 0:
 * l -> 2 ❌
 *
 * index 1:
 * o -> 2 ❌
 *
 * index 2:
 * v -> 1 ✅
 *
 *
 * Therefore:
 *
 * return 2
 */


/*
 * ============================================================
 * FAILURE TRACE
 * ============================================================
 *
 * Input:
 *
 * s = "aabb"
 *
 *
 * Frequency Table:
 *
 * a -> 2
 * b -> 2
 *
 *
 * Second traversal:
 *
 * index 0:
 * a -> 2 ❌
 *
 * index 1:
 * a -> 2 ❌
 *
 * index 2:
 * b -> 2 ❌
 *
 * index 3:
 * b -> 2 ❌
 *
 *
 * No character has frequency 1.
 *
 * Therefore:
 *
 * return -1
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Example:
 *
 * "loveleetcode"
 *
 *
 * First Pass:
 *
 * ┌───────┬───────────┐
 * │ Char  │ Frequency │
 * ├───────┼───────────┤
 * │ l     │     2     │
 * │ o     │     2     │
 * │ v     │     1     │
 * │ e     │     4     │
 * │ t     │     1     │
 * │ c     │     1     │
 * └───────┴───────────┘
 *
 *
 * Second Pass:
 *
 * l → 2 ❌
 * o → 2 ❌
 * v → 1 ✅
 *
 *
 * Answer:
 *
 * 2
 */


/*
 * ============================================================
 * WHY CAN'T WE RETURN DURING THE FIRST LOOP?
 * ============================================================
 *
 * Consider:
 *
 * "leetcode"
 *
 * When we first see:
 *
 * l
 *
 * We don't yet know whether another 'l' appears later.
 *
 * Therefore, we cannot immediately say:
 *
 * "l is unique."
 *
 *
 * We first need to count the entire string.
 *
 * Then we can determine which characters are unique.
 *
 * This is why we need two passes.
 */


/*
 * ============================================================
 * WHY DO WE TRAVERSE FROM LEFT TO RIGHT?
 * ============================================================
 *
 * The problem asks for the FIRST unique character.
 *
 * Example:
 *
 * "loveleetcode"
 *
 * Unique characters include:
 *
 * v
 * t
 * c
 *
 * But:
 *
 * v appears first.
 *
 * Therefore, we must traverse from left to right.
 *
 *
 * If we traversed from right to left, we might return
 * a different unique character.
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
 * "aabbc"
 *
 * Set:
 *
 * {
 *     a,
 *     b,
 *     c
 * }
 *
 * But we need to know:
 *
 * a -> 2
 * b -> 2
 * c -> 1
 *
 * Therefore, a frequency table is required.
 *
 *
 * ============================================================
 * OBJECT VS MAP
 * ============================================================
 *
 * We can solve this using either:
 *
 * 1. Object
 * 2. Map
 *
 *
 * Object:
 *
 * const obj = {};
 *
 *
 * Map:
 *
 * const map = new Map();
 *
 *
 * Both can store frequency information.
 *
 * Your solution uses an Object.
 */


/*
 * ============================================================
 * BRUTE FORCE APPROACH
 * ============================================================
 *
 * A brute force solution could check every character against
 * every other character.
 *
 * Example:
 *
 * for each character:
 *
 *     check the entire string
 *
 *
 * This results in:
 *
 * Time:
 *
 * O(n²)
 *
 *
 * Our frequency-counting solution improves this to:
 *
 * O(n)
 *
 *
 * This is why the Hash Map approach is preferred.
 */


/*
 * ============================================================
 * INTERVIEW EXPLANATION
 * ============================================================
 *
 * "I solve this problem using a frequency-counting approach.
 *
 * First, I create an object to store the frequency of every
 * character in the string.
 *
 * I make one pass through the string and increment the
 * frequency of each character.
 *
 * After that, I make a second pass from left to right.
 *
 * For each character, I check whether its frequency is exactly
 * one. If it is, I return its index.
 *
 * Because I'm traversing from left to right, the first
 * character with a frequency of one is guaranteed to be the
 * first unique character.
 *
 * If I finish the traversal without finding one, I return -1.
 *
 * The time complexity is O(n) because I traverse the string
 * twice using sequential loops.
 *
 * The space complexity is O(n) in the general case because
 * the frequency object can contain up to n distinct characters.
 *
 * If the character set is fixed, such as lowercase English
 * letters, the space can be considered O(1)."
 */


/*
 * ============================================================
 * COMPLEXITY
 * ============================================================
 *
 * Let n = length of string.
 *
 *
 * Time Complexity:
 *
 * O(n)
 *
 *
 * Why?
 *
 * First loop:
 *
 * O(n)
 *
 * Second loop:
 *
 * O(n)
 *
 *
 * Total:
 *
 * O(n) + O(n)
 * = O(n)
 *
 *
 * Space Complexity:
 *
 * O(n)
 *
 * In the general case, the frequency object can contain
 * up to n unique characters.
 *
 *
 * If the alphabet is fixed:
 *
 * O(1)
 */


/*
 * ============================================================
 * EDGE CASES
 * ============================================================
 */


/*
 * 1. Single character
 *
 * "a"
 *
 * Expected:
 * 0
 */

console.log(firstUniqChar("a"));
// Expected: 0


/*
 * 2. No unique character
 *
 * "aabb"
 *
 * Expected:
 * -1
 */

console.log(firstUniqChar("aabb"));
// Expected: -1


/*
 * 3. Empty string
 *
 * ""
 *
 * Expected:
 * -1
 */

console.log(firstUniqChar(""));
// Expected: -1


/*
 * 4. Unique character at the end
 *
 * "aabbc"
 *
 * Expected:
 * 4
 */

console.log(firstUniqChar("aabbc"));
// Expected: 4


/*
 * 5. First character is unique
 *
 * "abcabcx"
 *
 * Expected:
 * 6
 */

console.log(firstUniqChar("abcabcx"));
// Expected: 6


/*
 * 6. Multiple unique characters
 *
 * "leetcode"
 *
 * First unique character:
 *
 * l
 *
 * Expected:
 * 0
 */

console.log(firstUniqChar("leetcode"));
// Expected: 0


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(firstUniqChar("leetcode"));
// Expected: 0

console.log(firstUniqChar("loveleetcode"));
// Expected: 2

console.log(firstUniqChar("aabb"));
// Expected: -1

console.log(firstUniqChar("a"));
// Expected: 0

console.log(firstUniqChar("aabbc"));
// Expected: 4

console.log(firstUniqChar(""));
// Expected: -1

console.log(firstUniqChar("abcabcx"));
// Expected: 6


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * 0
 * 2
 * -1
 * 0
 * 4
 * -1
 * 6
 */


/*
 * ============================================================
 * COMMON INTERVIEW FOLLOW-UP QUESTIONS
 * ============================================================
 *
 *
 * Q1. Why do we need two passes?
 *
 * Answer:
 *
 * During the first pass, we don't know whether a character
 * appears again later.
 *
 * The first pass calculates the complete frequency table.
 *
 * The second pass uses that information to find the first
 * character whose frequency is one.
 *
 *
 * ------------------------------------------------------------
 *
 * Q2. Why can't we use a Set?
 *
 * Answer:
 *
 * A Set only tells us whether a character exists.
 *
 * We need to know how many times each character appears.
 *
 * Therefore, we need a frequency table.
 *
 *
 * ------------------------------------------------------------
 *
 * Q3. Why do we return the index instead of the character?
 *
 * Answer:
 *
 * The problem specifically asks for the index of the first
 * unique character.
 *
 * Therefore, when we find:
 *
 * obj[s[i]] === 1
 *
 * we return:
 *
 * i
 *
 *
 * ------------------------------------------------------------
 *
 * Q4. Why is the solution O(n) and not O(n²)?
 *
 * Answer:
 *
 * The two loops are sequential, not nested.
 *
 * First loop:
 *
 * O(n)
 *
 * Second loop:
 *
 * O(n)
 *
 * Therefore:
 *
 * O(n) + O(n)
 * = O(n)
 *
 *
 * ------------------------------------------------------------
 *
 * Q5. Can we solve this with one loop?
 *
 * Answer:
 *
 * It is possible with more complicated data structures, but
 * the standard and clean solution is a two-pass frequency
 * counting approach.
 *
 * The two-pass solution is easier to understand and has
 * O(n) time complexity.
 *
 *
 * ------------------------------------------------------------
 *
 * Q6. What happens if there is no unique character?
 *
 * Answer:
 *
 * After the second loop completes, we return:
 *
 * -1
 *
 *
 * ============================================================
 * IMPORTANT INTERVIEW CONCEPTS
 * ============================================================
 *
 * 1. Frequency Counting
 * 2. Hash Map
 * 3. Object as Frequency Table
 * 4. Two-Pass Algorithm
 * 5. Sequential Loops
 * 6. Early Return
 * 7. First Unique Element
 * 8. Character Frequency
 * 9. O(n) Time
 * 10. O(n) Space
 *
 *
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * When a problem asks:
 *
 * "Find the first element that appears exactly once"
 *
 * Think:
 *
 * Frequency Map + Second Traversal
 *
 *
 * General pattern:
 *
 * 1. Count frequencies.
 *
 * 2. Traverse again.
 *
 * 3. Find the first element whose frequency is 1.
 *
 *
 * This pattern is useful for:
 *
 * • First unique character
 * • First non-repeating element
 * • Duplicate detection
 * • Frequency-based problems
 * • Finding most/least frequent elements
 *
 *
 * ============================================================
 * END OF PROBLEM #04-strings
 * ============================================================
 */