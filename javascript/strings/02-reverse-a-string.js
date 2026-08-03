/*
 * ============================================================
 * Problem #02: Reverse a String (In-Place)
 * ============================================================
 *
 * Problem:
 * Given an array of characters, reverse the array in-place.
 *
 * Do NOT create another array.
 *
 * Return the modified array.
 *
 * Note:
 * In JavaScript, strings are immutable, so interviewers
 * usually provide the input as a character array.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * ['h','e','l','l','o']
 *
 * Output:
 * ['o','l','l','e','h']
 *
 *
 * Input:
 * ['H','a','n','n','a','h']
 *
 * Output:
 * ['h','a','n','n','a','H']
 *
 *
 * Input:
 * ['a']
 *
 * Output:
 * ['a']
 *
 *
 * Input:
 * []
 *
 * Output:
 * []
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Two Pointer Technique
 * ------------------------
 * Use two pointers:
 *
 * Left Pointer  -> Starts from index 0
 * Right Pointer -> Starts from the last index
 *
 * Both pointers move towards the center.
 *
 *
 * 2. In-Place Modification
 * ------------------------
 * Instead of creating another array,
 * we modify the existing array.
 *
 * Therefore,
 * Space Complexity remains O(1).
 *
 *
 * 3. Swapping
 * -----------
 * Swap both characters using destructuring:
 *
 * [arr[left], arr[right]] =
 * [arr[right], arr[left]]
 *
 *
 * 4. Loop Condition
 * -----------------
 * Continue while:
 *
 * left < right
 *
 * Once both pointers meet or cross,
 * the array is completely reversed.
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
 * right = arr.length - 1
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
 * Swap:
 *
 * arr[left]
 *
 * and
 *
 * arr[right]
 *
 *
 * Step 4
 *
 * Increment left.
 *
 * Decrement right.
 *
 *
 * Step 5
 *
 * Continue until both pointers meet.
 *
 *
 * Step 6
 *
 * Return the modified array.
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

let chars = ['h', 'e', 'l', 'l', 'o'];

function reverseString(chars) {

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {

        [chars[left], chars[right]] = [chars[right], chars[left]];

        left++;
        right--;

    }

    return chars;
}

console.log(reverseString(chars));


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * ['h','e','l','l','o']
 *
 * --------------------------------
 *
 * left = 0
 *
 * right = 4
 *
 * Swap:
 *
 * h <-> o
 *
 * ['o','e','l','l','h']
 *
 * --------------------------------
 *
 * left = 1
 *
 * right = 3
 *
 * Swap:
 *
 * e <-> l
 *
 * ['o','l','l','e','h']
 *
 * --------------------------------
 *
 * left = 2
 *
 * right = 2
 *
 * Loop Ends
 *
 * Return:
 *
 * ['o','l','l','e','h']
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Initial
 *
 * [h, e, l, l, o]
 *  ↑           ↑
 * left      right
 *
 * -----------------------------
 *
 * Swap
 *
 * [o, e, l, l, h]
 *     ↑     ↑
 *
 * -----------------------------
 *
 * Swap
 *
 * [o, l, l, e, h]
 *        ↑
 *
 * -----------------------------
 *
 * Done
 *
 * [o, l, l, e, h]
 */


/*
 * ============================================================
 * WHY TWO POINTERS?
 * ============================================================
 *
 * The left pointer starts from the beginning
 * while the right pointer starts from the end.
 *
 * By swapping both characters and moving the
 * pointers toward the center, we reverse the
 * array without using any extra memory.
 *
 * This makes the solution efficient and in-place.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(reverseString(['h','e','l','l','o']));
// Expected: ['o','l','l','e','h']

console.log(reverseString(['H','a','n','n','a','h']));
// Expected: ['h','a','n','n','a','H']

console.log(reverseString(['a']));
// Expected: ['a']

console.log(reverseString([]));
// Expected: []

console.log(reverseString(['J','S']));
// Expected: ['S','J']


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * ['o','l','l','e','h']
 * ['h','a','n','n','a','H']
 * ['a']
 * []
 * ['S','J']
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "I solve this problem using the Two Pointer technique.
 *
 * I initialize one pointer at the beginning of the
 * character array and another at the end.
 *
 * While the left pointer is less than the right pointer,
 * I swap the characters at both positions and move
 * both pointers toward the center.
 *
 * Once the pointers meet or cross each other,
 * the array is completely reversed.
 *
 * Since I modify the original array instead of creating
 * a new one, the algorithm works in-place.
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
 * 2. In-Place Modification
 * 3. Swapping
 * 4. Mutable Arrays
 * 5. String Immutability in JavaScript
 * 6. Array Traversal
 * 7. O(n) Time
 * 8. O(1) Space
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * The Two Pointer pattern is commonly used to:
 *
 * • Reverse arrays
 * • Reverse character arrays
 * • Check palindromes
 * • Compare elements from both ends
 * • Solve sorted array problems
 *
 * Pattern:
 *
 * 1. Place one pointer at the beginning.
 * 2. Place another pointer at the end.
 * 3. Swap or compare the elements.
 * 4. Move both pointers toward the center.
 * 5. Stop when the pointers meet or cross.
 *
 * This is one of the most frequently used
 * patterns in coding interviews.
 */