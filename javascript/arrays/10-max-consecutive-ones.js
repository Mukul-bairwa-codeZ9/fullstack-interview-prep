/*
 * ============================================================
 * Problem #10: Maximum Consecutive Ones
 * ============================================================
 *
 * Problem:
 * Given a binary array (containing only 0s and 1s),
 * return the length of the longest consecutive sequence
 * of 1s.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * [1,1,0,1,1,1]
 *
 * Output:
 * 3
 *
 *
 * Input:
 * [1,0,1,1,0,1]
 *
 * Output:
 * 2
 *
 *
 * Input:
 * [0,0,0]
 *
 * Output:
 * 0
 *
 *
 * Input:
 * [1,1,1,1]
 *
 * Output:
 * 4
 *
 *
 * Input:
 * []
 *
 * Output:
 * 0
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Running Counter
 * ------------------
 * Maintain a counter for the current streak while
 * traversing the array.
 *
 *
 * 2. Maximum Tracker
 * ------------------
 * Along with the current streak, maintain another variable
 * that stores the maximum streak found so far.
 *
 *
 * 3. Streak
 * ---------
 * A streak means consecutive occurrences of the same value.
 *
 * Example:
 *
 * [1,1,1]
 *
 * Streak = 3
 *
 *
 * Example:
 *
 * [1,1,0,1]
 *
 * First streak = 2
 *
 * Second streak = 1
 *
 *
 * 4. Resetting State
 * ------------------
 * Whenever a 0 is encountered,
 * the current streak ends.
 *
 * Therefore:
 *
 * currentCount = 0
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
 * Create two variables:
 *
 * currentCount = 0
 *
 * maxCount = 0
 *
 *
 * Step 2
 *
 * Traverse the array.
 *
 *
 * Step 3
 *
 * If current element is 1:
 *
 * currentCount++
 *
 *
 * Step 4
 *
 * Update:
 *
 * maxCount
 *
 * if currentCount becomes greater.
 *
 *
 * Step 5
 *
 * If current element is 0:
 *
 * Reset:
 *
 * currentCount = 0
 *
 *
 * Step 6
 *
 * Return:
 *
 * maxCount
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

function maxConsecutiveOnes(arr) {

    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 1) {

            currentCount++;

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }

        } else {

            currentCount = 0;

        }

    }

    return maxCount;
}


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * [1,1,0,1,1,1]
 *
 * --------------------------------
 *
 * Read:
 * 1
 *
 * currentCount = 1
 *
 * maxCount = 1
 *
 * --------------------------------
 *
 * Read:
 * 1
 *
 * currentCount = 2
 *
 * maxCount = 2
 *
 * --------------------------------
 *
 * Read:
 * 0
 *
 * currentCount = 0
 *
 * --------------------------------
 *
 * Read:
 * 1
 *
 * currentCount = 1
 *
 * --------------------------------
 *
 * Read:
 * 1
 *
 * currentCount = 2
 *
 * --------------------------------
 *
 * Read:
 * 1
 *
 * currentCount = 3
 *
 * maxCount = 3
 *
 * Return:
 *
 * 3
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Array
 *
 * [1,1,0,1,1,1]
 *
 * current = 0
 * max = 0
 *
 * -------------------------
 *
 * 1
 *
 * current = 1
 * max = 1
 *
 * -------------------------
 *
 * 1
 *
 * current = 2
 * max = 2
 *
 * -------------------------
 *
 * 0
 *
 * current = 0
 *
 * -------------------------
 *
 * 1
 *
 * current = 1
 *
 * -------------------------
 *
 * 1
 *
 * current = 2
 *
 * -------------------------
 *
 * 1
 *
 * current = 3
 *
 * max = 3
 */


/*
 * ============================================================
 * WHY TWO VARIABLES?
 * ============================================================
 *
 * currentCount
 *
 * Tracks the current streak of consecutive 1s.
 *
 *
 * maxCount
 *
 * Stores the longest streak encountered during traversal.
 *
 * Without maxCount,
 * we would lose the previous longest streak after resetting
 * currentCount.
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(maxConsecutiveOnes([1,1,0,1,1,1]));
// Expected: 3

console.log(maxConsecutiveOnes([1,0,1,1,0,1]));
// Expected: 2

console.log(maxConsecutiveOnes([0,0,0]));
// Expected: 0

console.log(maxConsecutiveOnes([1,1,1,1]));
// Expected: 4

console.log(maxConsecutiveOnes([]));
// Expected: 0

console.log(maxConsecutiveOnes([1,0,0,1,1]));
// Expected: 2

console.log(maxConsecutiveOnes([1]));
// Expected: 1

console.log(maxConsecutiveOnes([0]));
// Expected: 0

console.log(maxConsecutiveOnes([1,1,1,0,1]));
// Expected: 3


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * 3
 * 2
 * 0
 * 4
 * 0
 * 2
 * 1
 * 0
 * 3
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "I solve this problem using two variables:
 * currentCount and maxCount.
 *
 * While traversing the array, every time I encounter a 1,
 * I increment currentCount because the current streak
 * continues.
 *
 * If currentCount becomes greater than maxCount,
 * I update maxCount.
 *
 * Whenever I encounter a 0, the streak ends, so I reset
 * currentCount back to 0.
 *
 * After completing the traversal, maxCount represents the
 * length of the longest consecutive sequence of 1s.
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
 * 1. Running Counter
 * 2. State Tracking
 * 3. Consecutive Sequence
 * 4. Maximum Tracking
 * 5. Resetting State
 * 6. Single Traversal
 * 7. O(n) Time
 * 8. O(1) Space
 * 9. Binary Array
 * 10. Greedy State Update
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * Running Counter Pattern:
 *
 * 1. Maintain the current state.
 * 2. Maintain the best state found so far.
 * 3. Update the best state whenever the current state
 *    becomes larger.
 * 4. Reset the current state when the sequence breaks.
 *
 * This pattern is commonly used in interview problems
 * involving streaks, consecutive elements, and longest
 * continuous sequences.
 */