/*
 * ============================================================
 * Problem #7: Reverse an Array In-Place
 * ============================================================
 *
 * Problem:
 * Given an array, reverse the array WITHOUT creating a new
 * array.
 *
 * Modify the original array and return it.
 *
 * Do NOT use:
 *
 * array.reverse()
 *
 * Build the logic yourself.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * [1,2,3,4,5]
 *
 * Output:
 * [5,4,3,2,1]
 *
 *
 * Input:
 * [10,20,30,40]
 *
 * Output:
 * [40,30,20,10]
 *
 *
 * Input:
 * ["a","b","c"]
 *
 * Output:
 * ["c","b","a"]
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. In-Place Modification
 * ------------------------
 * Instead of creating a new array, we modify the original
 * array by swapping elements.
 *
 * This saves memory because no additional array is created.
 *
 *
 * 2. Two Pointers
 * ---------------
 * We use two pointers:
 *
 * left  -> Starts at index 0
 * right -> Starts at the last index
 *
 * Example:
 *
 * [10,20,30,40]
 *
 *  L         R
 *
 *
 * 3. Swapping
 * -----------
 * Exchange the values at the left and right pointers.
 *
 * Modern JavaScript allows swapping in one line:
 *
 * [arr[left], arr[right]] =
 * [arr[right], arr[left]];
 *
 *
 * 4. Move the Pointers
 * --------------------
 * After each swap:
 *
 * left++
 * right--
 *
 * This moves both pointers toward the center.
 *
 *
 * 5. When Do We Stop?
 * -------------------
 * Continue while:
 *
 * left < right
 *
 * Stop when:
 *
 * left >= right
 *
 * At this point every required swap has been completed.
 *
 *
 * 6. Complexity
 * -------------
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1)
 *
 * Only two pointer variables are used.
 */


/*
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * Step 1
 *
 * Create two pointers.
 *
 * left = 0
 *
 * right = array.length - 1
 *
 *
 * Step 2
 *
 * While left < right:
 *
 * - Swap both elements.
 * - Increment left.
 * - Decrement right.
 *
 *
 * Step 3
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

function reverseArrayInPlace(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * [10,20,30,40]
 *
 *
 * Initial:
 *
 * left = 0
 * right = 3
 *
 * [10,20,30,40]
 *   L        R
 *
 *
 * Swap:
 *
 * [40,20,30,10]
 *
 * left++
 * right--
 *
 *
 * left = 1
 * right = 2
 *
 * [40,20,30,10]
 *      L  R
 *
 *
 * Swap:
 *
 * [40,30,20,10]
 *
 * left++
 * right--
 *
 *
 * left = 2
 * right = 1
 *
 * left >= right
 *
 * Stop.
 *
 *
 * Final Output:
 *
 * [40,30,20,10]
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Initial
 *
 * [1,2,3,4,5]
 *
 *  L       R
 *
 *
 * Swap
 *
 * [5,2,3,4,1]
 *
 *    L   R
 *
 *
 * Swap
 *
 * [5,4,3,2,1]
 *
 *      LR
 *
 * Done
 */


/*
 * ============================================================
 * WHY TWO POINTERS?
 * ============================================================
 *
 * Previous Solution:
 *
 * Create a new array.
 *
 * Space:
 * O(n)
 *
 *
 * Current Solution:
 *
 * Modify the original array.
 *
 * Space:
 * O(1)
 *
 * No additional array is created.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(reverseArrayInPlace([1,2,3,4,5]));
// Expected: [5,4,3,2,1]

console.log(reverseArrayInPlace([10,20,30,40]));
// Expected: [40,30,20,10]

console.log(reverseArrayInPlace(["a","b","c"]));
// Expected: ["c","b","a"]

console.log(reverseArrayInPlace([100]));
// Expected: [100]

console.log(reverseArrayInPlace([]));
// Expected: []

console.log(reverseArrayInPlace([true,false]));
// Expected: [false,true]


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * [5,4,3,2,1]
 * [40,30,20,10]
 * ["c","b","a"]
 * [100]
 * []
 * [false,true]
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "Since the problem asks me to reverse the array without
 * using extra space, I use the Two Pointers technique.
 *
 * I initialize one pointer at the beginning of the array
 * and another at the end.
 *
 * While the left pointer is less than the right pointer,
 * I swap the elements at those positions.
 *
 * After each swap:
 *
 * - I increment the left pointer.
 * - I decrement the right pointer.
 *
 * When the pointers meet or cross each other, the array
 * has been completely reversed.
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
 * 2. In-place Algorithm
 * 3. Swapping
 * 4. Destructuring Assignment
 * 5. Left Pointer
 * 6. Right Pointer
 * 7. Pointer Movement
 * 8. O(n) Time
 * 9. O(1) Space
 * 10. Memory Optimization
 * 11. Array Manipulation
 * 12. Loop Termination
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * Two Pointers Pattern:
 *
 * left = 0
 *
 * right = array.length - 1
 *
 * while (left < right)
 *
 *     swap(left, right)
 *
 *     left++
 *
 *     right--
 *
 * This pattern is one of the most frequently used techniques
 * in coding interviews and appears in many array and string
 * problems.
 */