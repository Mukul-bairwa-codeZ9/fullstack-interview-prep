/*
 * ============================================================
 * Problem #8: Check if an Array is Sorted
 * ============================================================
 *
 * Problem:
 * Given an array of numbers, determine whether it is sorted
 * in ascending order.
 *
 * Return:
 * - true  -> if the array is sorted
 * - false -> otherwise
 *
 * Note:
 * Duplicate values are allowed.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * [1,2,3,4,5]
 *
 * Output:
 * true
 *
 *
 * Input:
 * [5,4,3]
 *
 * Output:
 * false
 *
 *
 * Input:
 * [1,3,2,4]
 *
 * Output:
 * false
 *
 *
 * Input:
 * [1,2,2,3]
 *
 * Output:
 * true
 *
 *
 * Input:
 * []
 *
 * Output:
 * true
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Ascending Order
 * ------------------
 * An array is sorted in ascending order if every element is
 * less than or equal to the next element.
 *
 * Current <= Next
 *
 * Example:
 *
 * [1,2,2,3,4]
 *
 * This is sorted because duplicate values are allowed.
 *
 *
 * 2. Adjacent Comparison
 * ----------------------
 * Instead of comparing every element with all other elements,
 * compare only the current element with the next element.
 *
 * Compare:
 *
 * arr[i]
 *
 * with
 *
 * arr[i + 1]
 *
 *
 * 3. Early Exit
 * -------------
 * As soon as we find one pair where:
 *
 * arr[i] > arr[i + 1]
 *
 * we immediately know the array is not sorted.
 *
 * Return:
 *
 * false
 *
 * There is no need to continue checking.
 *
 *
 * 4. Loop Boundary
 * ----------------
 * We stop at:
 *
 * arr.length - 1
 *
 * because the last comparison is:
 *
 * arr[length - 2]
 *
 * with
 *
 * arr[length - 1]
 *
 * Accessing arr[length] would return undefined.
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
 * Traverse the array.
 *
 *
 * Step 2
 *
 * Compare the current element with the next element.
 *
 *
 * Step 3
 *
 * If:
 *
 * current > next
 *
 * return false immediately.
 *
 *
 * Step 4
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

function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            return false;
        }

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
 * [1,2,3,4,5]
 *
 *
 * Compare:
 *
 * 1 <= 2 ✓
 *
 * 2 <= 3 ✓
 *
 * 3 <= 4 ✓
 *
 * 4 <= 5 ✓
 *
 * No violation found.
 *
 * Return:
 *
 * true
 *
 *
 * ------------------------------------------
 *
 * Input:
 *
 * [1,3,2,4]
 *
 * Compare:
 *
 * 1 <= 3 ✓
 *
 * 3 <= 2 ✗
 *
 * Return:
 *
 * false
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Sorted
 *
 * [1,2,3,4,5]
 *
 * 1 <= 2 ✓
 * 2 <= 3 ✓
 * 3 <= 4 ✓
 * 4 <= 5 ✓
 *
 * Result:
 * true
 *
 *
 * Not Sorted
 *
 * [1,5,3,8]
 *
 * 1 <= 5 ✓
 * 5 <= 3 ✗
 *
 * Stop Immediately
 *
 * Result:
 * false
 */


/*
 * ============================================================
 * WHY DO WE USE arr.length - 1 ?
 * ============================================================
 *
 * Suppose:
 *
 * [10,20,30]
 *
 * Length:
 * 3
 *
 * Last comparison should be:
 *
 * arr[1] vs arr[2]
 *
 * NOT:
 *
 * arr[2] vs arr[3]
 *
 * because:
 *
 * arr[3]
 *
 * is undefined.
 */


/*
 * ============================================================
 * EDGE CASES
 * ============================================================
 *
 * Empty Array
 *
 * []
 *
 * Result:
 * true
 *
 *
 * One Element
 *
 * [10]
 *
 * Result:
 * true
 *
 *
 * Duplicate Values
 *
 * [1,2,2,3]
 *
 * Result:
 * true
 *
 *
 * Descending Order
 *
 * [5,4,3]
 *
 * Result:
 * false
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(isSorted([1,2,3,4,5]));
// Expected: true

console.log(isSorted([5,4,3]));
// Expected: false

console.log(isSorted([1,3,2,4]));
// Expected: false

console.log(isSorted([10]));
// Expected: true

console.log(isSorted([]));
// Expected: true

console.log(isSorted([1,2,2,3]));
// Expected: true

console.log(isSorted([-5,-2,0,10]));
// Expected: true

console.log(isSorted([2,2,2,2]));
// Expected: true

console.log(isSorted([1,2,3,5,4]));
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
 * "To determine whether the array is sorted in ascending
 * order, I compare each element with its next element.
 *
 * If I ever find that the current element is greater than
 * the next element, I immediately return false because the
 * ascending order has been violated.
 *
 * If I complete the entire traversal without finding any
 * violation, I return true.
 *
 * This approach requires only one traversal of the array.
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
 * 1. Adjacent Comparison
 * 2. Ascending Order
 * 3. Early Exit
 * 4. Loop Boundary
 * 5. Edge Cases
 * 6. Single Traversal
 * 7. O(n) Time
 * 8. O(1) Space
 * 9. Duplicate Values
 * 10. Array Traversal
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * To check whether an array is sorted:
 *
 * Compare:
 *
 * Current Element
 *        with
 * Next Element
 *
 * If:
 *
 * Current > Next
 *
 * Return:
 *
 * false
 *
 * Otherwise continue.
 *
 * If no violations are found,
 * return true.
 *
 * This "Adjacent Comparison" pattern is widely used in
 * sorting algorithms and many array interview problems.
 */