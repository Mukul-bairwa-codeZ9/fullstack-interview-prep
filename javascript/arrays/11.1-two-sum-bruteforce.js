/*
 * ============================================================
 * Problem #11.1: Two Sum (Brute Force)
 * ============================================================
 *
 * Problem:
 * Given an array of integers and a target value,
 * return the indices of the two numbers whose sum equals
 * the target.
 *
 * You may assume:
 * - Exactly one valid solution exists.
 * - The same element cannot be used twice.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * nums = [2,7,11,15]
 * target = 9
 *
 * Output:
 * [0,1]
 *
 *
 * Input:
 * nums = [3,2,4]
 * target = 6
 *
 * Output:
 * [1,2]
 *
 *
 * Input:
 * nums = [3,3]
 * target = 6
 *
 * Output:
 * [0,1]
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Pair Comparison
 * ------------------
 * Compare every possible pair in the array.
 *
 * 2. Nested Loops
 * ---------------
 * Outer loop selects the first number.
 * Inner loop searches for its matching pair.
 *
 * 3. Why j = i + 1 ?
 * ------------------
 * - Avoid comparing an element with itself.
 * - Avoid duplicate comparisons.
 *
 * Example:
 *
 * (2,7) and (7,2)
 *
 * represent the same pair.
 *
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * 1. Traverse the array.
 * 2. For each element, compare it with every element after it.
 * 3. If their sum equals the target,
 *    return their indices.
 * 4. If no pair exists, return an empty array.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(1)
 */

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }

    }

    return [];
}

/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(twoSum([2,7,11,15],9));
// [0,1]

console.log(twoSum([3,2,4],6));
// [1,2]

console.log(twoSum([3,3],6));
// [0,1]

console.log(twoSum([1,5,8,2],10));
// [2,3]

console.log(twoSum([5,1,9,7],8));
// [1,3]

/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * I use two nested loops to compare every possible pair.
 * The outer loop selects the first number while the inner
 * loop searches for its matching pair.
 *
 * The inner loop starts from i + 1 to avoid comparing the
 * same element twice and to avoid duplicate pair checks.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(1)
 */