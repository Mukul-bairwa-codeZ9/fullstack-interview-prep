/*
 * ============================================================
 * Problem #5: Find the Missing Number
 * ============================================================
 *
 * Problem:
 * Given an array containing n distinct numbers taken from
 * the range 0 to n, return the missing number.
 *
 * There is exactly ONE missing number.
 *
 * Examples:
 *
 * [3,0,1]                    -> 2
 * [0,1]                      -> 2
 * [9,6,4,2,3,5,7,0,1]        -> 8
 * [0]                        -> 1
 * [1]                        -> 0
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Numbers Range
 * ----------------
 * If the array length is n,
 * the expected numbers are:
 *
 * 0, 1, 2, 3, ... n
 *
 * Example:
 *
 * Array:
 * [3,0,1]
 *
 * Length:
 * 3
 *
 * Expected numbers:
 *
 * 0 1 2 3
 *
 * Missing:
 * 2
 *
 *
 * 2. Mathematical Observation
 * ---------------------------
 * Instead of checking every number individually,
 * calculate:
 *
 * Expected Sum
 *
 * and
 *
 * Actual Sum
 *
 * Their difference is the missing number.
 *
 *
 * 3. Sum Formula
 * --------------
 *
 * Sum of numbers from:
 *
 * 0 to n
 *
 * Formula:
 *
 * n × (n + 1)
 * ------------
 *      2
 *
 * Since adding 0 doesn't change the sum,
 * this formula works perfectly.
 *
 *
 * 4. Why n = Array Length?
 * ------------------------
 *
 * Example:
 *
 * Array:
 * [3,0,1]
 *
 * Length:
 * 3
 *
 * Complete range:
 *
 * 0 1 2 3
 *
 * Highest number:
 * 3
 *
 * Therefore:
 *
 * n = numbers.length
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
 * Calculate n
 *
 * n = numbers.length
 *
 *
 * Step 2
 *
 * Calculate expected sum.
 *
 * expectedSum =
 *
 * n × (n + 1)
 * ------------
 *      2
 *
 *
 * Step 3
 *
 * Calculate the actual sum of the array.
 *
 *
 * Step 4
 *
 * Missing Number
 *
 * =
 *
 * Expected Sum
 *
 * -
 *
 * Actual Sum
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

function findMissingNumber(numbers) {

    const n = numbers.length;

    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = numbers.reduce(
        (sum, current) => sum + current,
        0
    );

    return expectedSum - actualSum;
}


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * [3,0,1]
 *
 * Length:
 *
 * n = 3
 *
 *
 * Expected Sum:
 *
 * (3 × 4) / 2
 *
 * = 6
 *
 *
 * Actual Sum:
 *
 * 3 + 0 + 1
 *
 * = 4
 *
 *
 * Missing Number:
 *
 * 6 - 4
 *
 * = 2
 *
 *
 * Final Answer:
 *
 * 2
 */


/*
 * ============================================================
 * WHY NOT USE A BRUTE FORCE APPROACH?
 * ============================================================
 *
 * We could check every number from:
 *
 * 0 to n
 *
 * and search for it in the array.
 *
 * Example:
 *
 * Need 0?
 * Search array.
 *
 * Need 1?
 * Search array.
 *
 * Need 2?
 * Search array.
 *
 * ...
 *
 * Searching an array takes:
 *
 * O(n)
 *
 * Doing it n times:
 *
 * O(n²)
 *
 * The mathematical solution is much faster.
 */


/*
 * ============================================================
 * ALTERNATIVE APPROACHES
 * ============================================================
 *
 * 1. Brute Force
 *
 * Time:
 * O(n²)
 *
 *
 * 2. Sorting
 *
 * Sort the array and compare indices.
 *
 * Time:
 * O(n log n)
 *
 *
 * 3. Hash Set
 *
 * Store all numbers in a Set.
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(n)
 *
 *
 * 4. Mathematical Formula (Preferred)
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1)
 *
 *
 * 5. XOR (Advanced)
 *
 * Time:
 * O(n)
 *
 * Space:
 * O(1)
 *
 * We'll learn this in a later problem.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(findMissingNumber([3, 0, 1]));
// Expected: 2

console.log(findMissingNumber([0, 1]));
// Expected: 2

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// Expected: 8

console.log(findMissingNumber([0]));
// Expected: 1

console.log(findMissingNumber([1]));
// Expected: 0

console.log(findMissingNumber([1, 2, 3, 4, 5]));
// Expected: 0

console.log(findMissingNumber([0, 1, 2, 3, 5]));
// Expected: 4


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * 2
 * 2
 * 8
 * 1
 * 0
 * 0
 * 4
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "Since the array contains numbers from 0 to n with one
 * missing value, I first calculate the expected sum using
 * the mathematical formula:
 *
 * n × (n + 1)
 * ------------
 *      2
 *
 * where n is the length of the array.
 *
 * Then I calculate the actual sum by traversing the array.
 *
 * Finally, I subtract the actual sum from the expected sum.
 *
 * The difference is the missing number.
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
 * 1. Mathematical optimization
 * 2. Sum formula
 * 3. Reduce()
 * 4. Array traversal
 * 5. Expected vs Actual value
 * 6. Brute Force vs Optimized
 * 7. O(n) Time
 * 8. O(1) Space
 * 9. Arithmetic series
 * 10. Edge case handling
 * 11. Problem observation
 * 12. Interview optimization
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * Whenever a problem involves:
 *
 * - Numbers from 0 to n
 * - Numbers from 1 to n
 * - One missing value
 *
 * Always ask yourself:
 *
 * "Can I calculate what the total SHOULD be?"
 *
 * If yes,
 * compare it with what you ACTUALLY have.
 *
 * Expected Value
 *      -
 * Actual Value
 *      =
 * Missing Value
 *
 * This mathematical pattern appears frequently in coding
 * interviews and helps avoid slower brute-force solutions.
 */