/*
 * ============================================================
 * Problem #01: Check if a String is a Palindrome
 * ============================================================
 *
 * Problem:
 * Given a string, determine whether it is a palindrome.
 *
 * A palindrome is a string that reads the same
 * forwards and backwards.
 *
 * Return:
 * true  -> if the string is a palindrome
 * false -> otherwise
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * "madam"
 *
 * Output:
 * true
 *
 *
 * Input:
 * "racecar"
 *
 * Output:
 * true
 *
 *
 * Input:
 * "hello"
 *
 * Output:
 * false
 *
 *
 * Input:
 * "a"
 *
 * Output:
 * true
 *
 *
 * Input:
 * ""
 *
 * Output:
 * true
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Two Pointer Technique
 * ------------------------
 * We use two pointers:
 *
 * Left Pointer  -> Starts from index 0
 * Right Pointer -> Starts from the last index
 *
 * Both pointers move towards the center.
 *
 *
 * 2. Symmetric Comparison
 * -----------------------
 * A palindrome has the same character at
 * equal distances from both ends.
 *
 * Example:
 *
 * m a d a m
 * ↑       ↑
 *
 * Compare:
 *
 * m == m
 *
 * a == a
 *
 * d (middle character)
 *
 *
 * 3. Early Return
 * ---------------
 * As soon as a mismatch is found,
 * the string cannot be a palindrome.
 *
 * Therefore:
 *
 * return false;
 *
 * immediately.
 *
 *
 * 4. Loop Condition
 * -----------------
 * Continue comparing while:
 *
 * left < right
 *
 * Once both pointers meet or cross each other,
 * every required comparison has already been made.
 *
 *
 * 5. Complexity
 * -------------
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1)
 */


/*
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * Step 1
 *
 * Initialize:
 *
 * left = 0
 *
 * right = str.length - 1
 *
 *
 * Step 2
 *
 * While:
 *
 * left < right
 *
 *
 * Step 3
 *
 * Compare:
 *
 * str[left]
 *
 * and
 *
 * str[right]
 *
 *
 * Step 4
 *
 * If both characters are different,
 * return false.
 *
 *
 * Step 5
 *
 * Otherwise:
 *
 * left++
 *
 * right--
 *
 *
 * Step 6
 *
 * If the loop finishes,
 * return true.
 *
 *
 * Complexity:
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1)
 */

function isPalindrome(str) {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;

    }

    return true;
}


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * "madam"
 *
 * --------------------------------
 *
 * left = 0
 *
 * right = 4
 *
 * Compare:
 *
 * m == m
 *
 * Move:
 *
 * left = 1
 *
 * right = 3
 *
 * --------------------------------
 *
 * Compare:
 *
 * a == a
 *
 * Move:
 *
 * left = 2
 *
 * right = 2
 *
 * --------------------------------
 *
 * left == right
 *
 * Loop Ends
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
 * String
 *
 * m  a  d  a  m
 * ↑           ↑
 *
 * left      right
 *
 * -------------------------
 *
 * Compare:
 *
 * m == m
 *
 * -------------------------
 *
 * a == a
 *
 * -------------------------
 *
 * left == right
 *
 * Return true
 *
 *
 * Another Example
 *
 * h  e  l  l  o
 * ↑           ↑
 *
 * h != o
 *
 * Return false
 */


/*
 * ============================================================
 * WHY TWO POINTERS?
 * ============================================================
 *
 * Instead of creating another string,
 * we compare characters directly from both ends.
 *
 * Advantages:
 *
 * • No extra memory
 * • Single traversal
 * • Early exit on mismatch
 *
 * This makes the algorithm both time and space efficient.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(isPalindrome("madam"));
// Expected: true

console.log(isPalindrome("racecar"));
// Expected: true

console.log(isPalindrome("level"));
// Expected: true

console.log(isPalindrome("hello"));
// Expected: false

console.log(isPalindrome("a"));
// Expected: true

console.log(isPalindrome(""));
// Expected: true

console.log(isPalindrome("abba"));
// Expected: true

console.log(isPalindrome("abcba"));
// Expected: true

console.log(isPalindrome("abcd"));
// Expected: false


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * true
 * true
 * true
 * false
 * true
 * true
 * true
 * true
 * false
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "I solve this problem using the Two Pointer technique.
 *
 * I initialize one pointer at the beginning of the string
 * and another at the end of the string.
 *
 * While the left pointer is less than the right pointer,
 * I compare the characters at both positions.
 *
 * If the characters are different,
 * I immediately return false because the string
 * cannot be a palindrome.
 *
 * If they are equal,
 * I move the left pointer one step forward
 * and the right pointer one step backward.
 *
 * If the loop finishes without finding any mismatch,
 * it means every symmetric pair matched,
 * so I return true.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)."
 */


/*
 * ============================================================
 * IMPORTANT INTERVIEW CONCEPTS
 * ============================================================
 *
 * 1. Two Pointers
 * 2. Symmetric Comparison
 * 3. String Traversal
 * 4. Early Return
 * 5. Left Pointer
 * 6. Right Pointer
 * 7. In-Place Comparison
 * 8. O(n) Time
 * 9. O(1) Space
 * 10. Loop Invariant
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * The Two Pointer pattern is useful whenever we need to:
 *
 * • Compare elements from both ends
 * • Reverse a string or array
 * • Check palindromes
 * • Solve sorted array problems
 * • Reduce unnecessary comparisons
 *
 * Pattern:
 *
 * 1. Initialize left and right pointers.
 * 2. Compare both values.
 * 3. If they differ, return immediately.
 * 4. Move both pointers toward the center.
 * 5. Continue until the pointers meet or cross.
 *
 * This is one of the most common patterns used in
 * coding interviews.
 */
