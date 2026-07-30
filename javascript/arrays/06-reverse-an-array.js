/*
 * ============================================================
 * Problem #6: Reverse an Array
 * ============================================================
 *
 * Problem:
 * Given an array, return a NEW array containing the elements
 * in reverse order.
 *
 * Do NOT use the built-in:
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
 * [1, 2, 3, 4, 5]
 *
 * Output:
 * [5, 4, 3, 2, 1]
 *
 *
 * Input:
 * ["a", "b", "c"]
 *
 * Output:
 * ["c", "b", "a"]
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
 * 1. Reverse Traversal
 * --------------------
 *
 * Normally we iterate:
 *
 * 0 → 1 → 2 → 3
 *
 * For reversing:
 *
 * 3 → 2 → 1 → 0
 *
 *
 * 2. Starting Index
 * -----------------
 *
 * The last element of an array is always:
 *
 * array.length - 1
 *
 * Example:
 *
 * [10,20,30,40]
 *
 * Length:
 * 4
 *
 * Last Index:
 * 3
 *
 *
 * 3. Build a New Array
 * --------------------
 *
 * Since we need to return a reversed array,
 * we create a new array and push elements into it
 * while traversing backwards.
 *
 *
 * 4. Complexity
 * -------------
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(n)
 */


/*
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * Step 1
 *
 * Create an empty array.
 *
 *
 * Step 2
 *
 * Start looping from:
 *
 * array.length - 1
 *
 *
 * Step 3
 *
 * Continue until index becomes:
 *
 * 0
 *
 *
 * Step 4
 *
 * Push every current element into the new array.
 *
 *
 * Step 5
 *
 * Return the new array.
 *
 *
 * Complexity:
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(n)
 */

function reverseArray(arr) {

    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
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
 * Start:
 *
 * reversed = []
 *
 *
 * i = 3
 *
 * Current = 40
 *
 * reversed = [40]
 *
 *
 * i = 2
 *
 * Current = 30
 *
 * reversed = [40,30]
 *
 *
 * i = 1
 *
 * Current = 20
 *
 * reversed = [40,30,20]
 *
 *
 * i = 0
 *
 * Current = 10
 *
 * reversed = [40,30,20,10]
 *
 *
 * Return:
 *
 * [40,30,20,10]
 */


/*
 * ============================================================
 * WHY NOT USE array.reverse()?
 * ============================================================
 *
 * JavaScript provides:
 *
 * array.reverse()
 *
 * Example:
 *
 * const arr = [1,2,3];
 *
 * arr.reverse();
 *
 * Output:
 *
 * [3,2,1]
 *
 * However, interviewers usually want to test your
 * understanding of loops and array indexing,
 * so you should first implement the logic yourself.
 */


/*
 * ============================================================
 * ALTERNATIVE APPROACHES
 * ============================================================
 *
 * 1. Create a New Array (Current Solution)
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(n)
 *
 *
 * 2. Built-in reverse()
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1) or implementation dependent
 *
 *
 * 3. Two Pointers (In-place)
 *
 * Swap:
 *
 * First ↔ Last
 *
 * Continue until both pointers meet.
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1)
 *
 * We'll learn this pattern next.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(reverseArray([1, 2, 3, 4, 5]));
// Expected: [5,4,3,2,1]

console.log(reverseArray([10, 20, 30, 40]));
// Expected: [40,30,20,10]

console.log(reverseArray(["a", "b", "c"]));
// Expected: ["c","b","a"]

console.log(reverseArray([100]));
// Expected: [100]

console.log(reverseArray([]));
// Expected: []

console.log(reverseArray([true, false]));
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
 * "I create a new array to store the reversed elements.
 *
 * I start iterating from the last index of the input array,
 * which is array.length - 1, and continue until index 0.
 *
 * During each iteration, I push the current element into
 * the new array.
 *
 * Since I traverse the original array from the end to the
 * beginning, the new array is built in reverse order.
 *
 * Finally, I return the reversed array.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)."
 */


/*
 * ============================================================
 * IMPORTANT INTERVIEW CONCEPTS
 * ============================================================
 *
 * 1. Reverse traversal
 * 2. Array indexing
 * 3. Last index = length - 1
 * 4. Loop decrement
 * 5. Building a new array
 * 6. Time Complexity O(n)
 * 7. Space Complexity O(n)
 * 8. Sequential traversal
 * 9. Edge case handling
 * 10. Reverse logic
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * To reverse an array without using built-in methods:
 *
 * 1. Start from the last index.
 * 2. Move towards index 0.
 * 3. Push each element into a new array.
 * 4. Return the new array.
 *
 * Remember:
 *
 * Forward Traversal:
 * 0 → 1 → 2 → 3
 *
 * Reverse Traversal:
 * 3 → 2 → 1 → 0
 *
 * This is one of the most fundamental array traversal
 * patterns and is the foundation for learning the
 * Two Pointers technique.
 */