/*
 * ============================================================
 * Problem #13: Contains Duplicate
 * LeetCode: 217
 * ============================================================
 *
 * Problem:
 * Given an integer array nums, return true if any value
 * appears at least twice in the array.
 *
 * Return false if every element is distinct.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * [1,2,3,1]
 *
 * Output:
 * true
 *
 *
 * Input:
 * [1,2,3,4]
 *
 * Output:
 * false
 *
 *
 * Input:
 * [1,1,1,3,3,4,3,2,4,2]
 *
 * Output:
 * true
 *
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Hash Set
 * -----------
 * A Set stores only unique values.
 *
 * Before inserting a value, we check whether it already exists.
 *
 * If it does, we have found a duplicate.
 *
 *
 * 2. Lookup Operation
 * -------------------
 * Set provides nearly constant-time lookup.
 *
 * seen.has(value)
 *
 * Average Time Complexity:
 *
 * O(1)
 *
 *
 * 3. Early Return
 * ---------------
 * As soon as we find the first duplicate,
 * we immediately return true.
 *
 * There is no need to continue traversing the array.
 *
 *
 * 4. Why Set Instead of Map?
 * --------------------------
 * We only need to know whether an element has already
 * been seen.
 *
 * We do not need to store frequencies.
 *
 * Therefore, Set is a better choice than Map.
 *
 *
 * 5. Complexity
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
 * Create an empty Set called seen.
 *
 *
 * Step 2
 *
 * Traverse the array.
 *
 *
 * Step 3
 *
 * For each element:
 *
 * - Check if it already exists in the Set.
 *
 * - If yes,
 *   return true.
 *
 *
 * Step 4
 *
 * Otherwise,
 * insert the current element into the Set.
 *
 *
 * Step 5
 *
 * If the traversal finishes without finding any duplicate,
 * return false.
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


const nums = [1, 2, 3, 1];

function containsDuplicate(nums) {

    const seen = new Set();

    for (const num of nums) {

        if (seen.has(num)) {
            return true;
        }

        seen.add(num);

    }

    return false;
}

console.log(containsDuplicate(nums));


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * [1,2,3,1]
 *
 * --------------------------------
 *
 * seen = {}
 *
 * --------------------------------
 *
 * Read 1
 *
 * Not found
 *
 * Add 1
 *
 * seen = {1}
 *
 * --------------------------------
 *
 * Read 2
 *
 * Not found
 *
 * Add 2
 *
 * seen = {1,2}
 *
 * --------------------------------
 *
 * Read 3
 *
 * Not found
 *
 * Add 3
 *
 * seen = {1,2,3}
 *
 * --------------------------------
 *
 * Read 1
 *
 * Already exists
 *
 * Return true
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Array:
 *
 * [1,2,3,1]
 *
 * -----------------------------
 *
 * Read 1
 *
 * Seen: {}
 *
 * Add 1
 *
 * Seen: {1}
 *
 * -----------------------------
 *
 * Read 2
 *
 * Seen: {1}
 *
 * Add 2
 *
 * Seen: {1,2}
 *
 * -----------------------------
 *
 * Read 3
 *
 * Seen: {1,2}
 *
 * Add 3
 *
 * Seen: {1,2,3}
 *
 * -----------------------------
 *
 * Read 1
 *
 * Seen: {1,2,3}
 *
 * Duplicate Found
 *
 * Return true
 */


/*
 * ============================================================
 * WHY HASH SET?
 * ============================================================
 *
 * Without a Set, we would need to compare every element
 * with every other element using nested loops.
 *
 * That approach takes:
 *
 * O(n²)
 *
 * Using a Set allows us to check whether an element has
 * already been seen in approximately O(1) time.
 *
 * This reduces the overall complexity to O(n).
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(containsDuplicate([1,2,3,1]));
// Expected: true

console.log(containsDuplicate([1,2,3,4]));
// Expected: false

console.log(containsDuplicate([1,1,1]));
// Expected: true

console.log(containsDuplicate([5]));
// Expected: false

console.log(containsDuplicate([]));
// Expected: false

console.log(containsDuplicate([2,4,6,8,10]));
// Expected: false

console.log(containsDuplicate([9,8,7,6,5,9]));
// Expected: true


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * true
 * false
 * true
 * false
 * false
 * false
 * true
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "I solve this problem using a Hash Set.
 *
 * As I traverse the array, I check whether the current
 * element has already been seen.
 *
 * If it exists in the Set, I immediately return true,
 * because a duplicate has been found.
 *
 * Otherwise, I insert the current element into the Set
 * and continue traversing.
 *
 * If I finish traversing the array without finding any
 * duplicate, I return false.
 *
 * This solution performs only one traversal of the array.
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
 * 1. Hash Set
 * 2. Lookup Table
 * 3. Early Return
 * 4. One Pass Traversal
 * 5. Unique Elements
 * 6. O(n) Time Complexity
 * 7. O(n) Space Complexity
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * The Hash Set pattern is useful whenever we need to:
 *
 * • Detect duplicates
 * • Check whether an element already exists
 * • Find unique values
 * • Perform fast membership lookups
 *
 * Pattern:
 *
 * 1. Create an empty Set.
 * 2. Traverse the array.
 * 3. If the current element exists in the Set,
 *    return the required answer.
 * 4. Otherwise, insert it into the Set.
 *
 * This is one of the most common hashing techniques
 * used in coding interviews.
 */



/*
 * ============================================================
 * COMMON INTERVIEW FOLLOW-UP QUESTIONS
 * ============================================================
 *
 * Q1. Why use a Set instead of a Map?
 *
 * A:
 * We only need to know whether an element has already been
 * seen. Since we don't need frequency counts, Set is simpler
 * and more appropriate.
 *
 * ------------------------------------------------------------
 *
 * Q2. Can this be solved without extra space?
 *
 * A:
 * Yes. By sorting the array first and comparing adjacent
 * elements. However, sorting changes the array and takes
 * O(n log n) time.
 *
 * ------------------------------------------------------------
 *
 * Q3. Why not use nested loops?
 *
 * A:
 * Nested loops require comparing every element with every
 * other element, resulting in O(n²) time complexity.
 */