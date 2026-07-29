/*
 * ============================================================
 * Problem #4: Remove Duplicates from an Array
 * ============================================================
 *
 * Problem:
 * Given an array of numbers, return a new array containing
 * only UNIQUE values while preserving the original order.
 *
 * Examples:
 * [1, 2, 3, 2, 4, 5, 1] -> [1, 2, 3, 4, 5]
 * [5, 5, 5, 5]          -> [5]
 * [3, 1, 3, 2, 1]       -> [3, 1, 2]
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Unique Values
 * ----------------
 * A unique value is added only the FIRST time it appears.
 *
 * Example:
 *
 * [2, 1, 2, 3, 2, 4, 1]
 *
 * Result:
 *
 * [2, 1, 3, 4]
 *
 * Notice that we preserve the order of the first occurrence.
 *
 *
 * 2. Lookup Table
 * ----------------
 * We maintain a lookup object to remember which values have
 * already been processed.
 *
 * Example:
 *
 * {
 *   2: 1,
 *   1: 1,
 *   3: 1
 * }
 *
 * If a value already exists in the lookup object,
 * we ignore it.
 *
 *
 * 3. Preserve Order
 * -----------------
 * We DO NOT sort the array.
 *
 * Input:
 * [3, 1, 3, 2, 1]
 *
 * Correct Output:
 * [3, 1, 2]
 *
 * Wrong Output:
 * [1, 2, 3]
 *
 *
 * 4. Hash Lookup
 * --------------
 * Instead of searching the result array every time,
 * we use an Object for O(1) average lookup.
 *
 *
 * 5. Complexity
 * -------------
 * Time:  O(n)
 * Space: O(n)
 *
 * We traverse the array once.
 */


/*
 * ============================================================
 * ALGORITHM 1 — OBJECT LOOKUP (PREFERRED FOR LEARNING)
 * ============================================================
 *
 * Idea:
 *
 * 1. Create a lookup object.
 * 2. Create a result array.
 * 3. Traverse the array.
 * 4. If the current value has never been seen:
 *      - store it in the object
 *      - push it into the result
 * 5. Otherwise ignore it.
 *
 * Complexity:
 *
 * Time:  O(n)
 * Space: O(n)
 */

function removeDuplicates(numbers) {
    const lookup = {};
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];

        if (lookup[current] === undefined) {
            lookup[current] = true;
            result.push(current);
        }
    }

    return result;
}


/*
 * ============================================================
 * ALGORITHM 2 — USING SET
 * ============================================================
 *
 * JavaScript Set automatically stores unique values.
 *
 * Example:
 *
 * const set = new Set([1,2,2,3]);
 *
 * Result:
 *
 * Set {1,2,3}
 *
 * Complexity:
 *
 * Time:  O(n)
 * Space: O(n)
 */

function removeDuplicatesUsingSet(numbers) {
    return [...new Set(numbers)];
}


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * [2, 1, 2, 3, 2, 4, 1]
 *
 * Start:
 *
 * lookup = {}
 * result = []
 *
 *
 * current = 2
 *
 * Not found
 *
 * lookup = {2: true}
 * result = [2]
 *
 *
 * current = 1
 *
 * Not found
 *
 * lookup = {2: true, 1: true}
 * result = [2,1]
 *
 *
 * current = 2
 *
 * Already exists
 *
 * Ignore
 *
 *
 * current = 3
 *
 * Not found
 *
 * lookup = {
 *   2: true,
 *   1: true,
 *   3: true
 * }
 *
 * result = [2,1,3]
 *
 *
 * current = 2
 *
 * Ignore
 *
 *
 * current = 4
 *
 * Add
 *
 * result = [2,1,3,4]
 *
 *
 * current = 1
 *
 * Ignore
 *
 *
 * Final Output:
 *
 * [2,1,3,4]
 */


/*
 * ============================================================
 * WHY NOT USE result.includes()?
 * ============================================================
 *
 * Example:
 *
 * if (!result.includes(current)) {
 *     result.push(current);
 * }
 *
 * This works, but:
 *
 * includes()
 *
 * is O(n)
 *
 * Since it runs inside a loop,
 * total complexity becomes:
 *
 * O(n²)
 *
 * Using an Object gives us O(1) average lookup.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log("========== Object Lookup ==========");

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1]));
// Expected: [1,2,3,4,5]

console.log(removeDuplicates([5, 5, 5, 5]));
// Expected: [5]

console.log(removeDuplicates([10, 20, 30]));
// Expected: [10,20,30]

console.log(removeDuplicates([3, 1, 3, 2, 1]));
// Expected: [3,1,2]

console.log(removeDuplicates([]));
// Expected: []

console.log(removeDuplicates([-1, -2, -1, -3, -2]));
// Expected: [-1,-2,-3]

console.log(removeDuplicates([0, 0, 1, 2, 2]));
// Expected: [0,1,2]


console.log("\n========== Set Solution ==========");

console.log(removeDuplicatesUsingSet([1, 2, 3, 2, 4, 5, 1]));
// Expected: [1,2,3,4,5]

console.log(removeDuplicatesUsingSet([5, 5, 5, 5]));
// Expected: [5]

console.log(removeDuplicatesUsingSet([3, 1, 3, 2, 1]));
// Expected: [3,1,2]


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * ========== Object Lookup ==========
 *
 * [1,2,3,4,5]
 * [5]
 * [10,20,30]
 * [3,1,2]
 * []
 * [-1,-2,-3]
 * [0,1,2]
 *
 *
 * ========== Set Solution ==========
 *
 * [1,2,3,4,5]
 * [5]
 * [3,1,2]
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "The goal is to return only the first occurrence of each
 * value while preserving the original order.
 *
 * I maintain a lookup object that stores every value I've
 * already encountered.
 *
 * While traversing the array:
 *
 * - If the value doesn't exist in the lookup object,
 *   I add it to both the lookup object and the result array.
 *
 * - If the value already exists,
 *   I ignore it.
 *
 * This avoids repeatedly searching the result array.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 * because the lookup object and result array can grow
 * with the number of unique values."
 */


/*
 * ============================================================
 * IMPORTANT INTERVIEW CONCEPTS TO REMEMBER
 * ============================================================
 *
 * 1. Unique values
 * 2. Preserve insertion order
 * 3. Hash lookup
 * 4. Object lookup table
 * 5. Set
 * 6. O(1) average lookup
 * 7. O(n) traversal
 * 8. O(n²) using includes()
 * 9. First occurrence
 * 10. Duplicate removal
 * 11. Time complexity
 * 12. Space complexity
 * 13. Lookup vs searching
 * 14. Set automatically removes duplicates
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * Ask yourself:
 *
 * "Have I seen this value before?"
 *
 * If YES:
 *     Ignore it.
 *
 * If NO:
 *     Store it.
 *     Push it into the result.
 *
 * This lookup pattern is one of the most common patterns
 * in JavaScript interviews.
 */