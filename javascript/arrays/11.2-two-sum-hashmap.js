/*
 * ============================================================
 * Problem #12: Two Sum (Optimal - Hash Map)
 * ============================================================
 *
 * Problem:
 * Given an array of integers and a target value,
 * return the indices of the two numbers whose sum equals
 * the target.
 *
 * ============================================================
 * KEY IDEA
 * ============================================================
 *
 * Instead of searching the remaining array,
 * store every previously visited number inside a Hash Map.
 *
 * Hash Map stores:
 *
 * Number -> Index
 *
 * Example:
 *
 * {
 *   2 : 0,
 *   7 : 1,
 *   11 : 2
 * }
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Complement
 * -------------
 * complement = target - currentNumber
 *
 * Example:
 *
 * target = 9
 * current = 2
 *
 * complement = 7
 *
 *
 * 2. Hash Map
 * -----------
 * Stores every number already visited.
 *
 *
 * 3. One Pass
 * -----------
 * Traverse the array only once.
 *
 *
 * ============================================================
 * ALGORITHM
 * ============================================================
 *
 * Step 1
 * Create an empty Hash Map.
 *
 * Step 2
 * Traverse the array.
 *
 * Step 3
 * Calculate:
 *
 * complement = target - currentNumber
 *
 * Step 4
 * If complement already exists in the map,
 * return its index along with the current index.
 *
 * Step 5
 * Otherwise store:
 *
 * currentNumber -> currentIndex
 *
 * Step 6
 * Continue until the answer is found.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 */

function twoSum(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);

    }

    return [];
}

/*
 * ============================================================
 * DRY RUN
 * ============================================================
 *
 * nums = [2,7,11,15]
 * target = 9
 *
 * --------------------------------
 *
 * Map = {}
 *
 * Current = 2
 *
 * Need = 7
 *
 * Found?
 * No
 *
 * Store:
 *
 * 2 -> 0
 *
 * --------------------------------
 *
 * Current = 7
 *
 * Need = 2
 *
 * Found?
 * Yes
 *
 * Return:
 *
 * [0,1]
 *
 */

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
 * BRUTE FORCE VS HASH MAP
 * ============================================================
 *
 * Brute Force
 * -----------
 * Time  : O(n²)
 * Space : O(1)
 *
 * Hash Map
 * --------
 * Time  : O(n)
 * Space : O(n)
 *
 * Trade-off:
 *
 * We use extra memory to reduce the time complexity
 * from O(n²) to O(n).
 */

/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * I use a Hash Map to store every number along with
 * its index while traversing the array.
 *
 * For each element, I calculate its complement using:
 *
 * target - currentNumber
 *
 * Before storing the current number,
 * I check whether the complement already exists
 * in the Hash Map.
 *
 * If it exists, I return the stored index and the
 * current index.
 *
 * Otherwise, I store the current number and continue.
 *
 * This reduces the time complexity from O(n²)
 * to O(n).
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 */