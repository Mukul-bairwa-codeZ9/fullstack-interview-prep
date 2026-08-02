/*
 * ============================================================
 * ALTERNATIVE SOLUTION
 * ============================================================
 *
 * Approach:
 * Two Pointers with Swapping
 *
 * Instead of overwriting the non-zero elements and filling the
 * remaining positions with zeroes, we swap every non-zero
 * element with the element at the current insert position.
 *
 * This also modifies the array in-place while maintaining the
 * relative order of non-zero elements.
 *
 * Example:
 *
 * Input:
 *
 * [0,1,0,3,12]
 *
 * Initial:
 *
 * insertPosition = 0
 *
 * --------------------------------
 *
 * Read:
 * 0
 *
 * Ignore
 *
 * --------------------------------
 *
 * Read:
 * 1
 *
 * Swap index 1 with index 0
 *
 * [1,0,0,3,12]
 *
 * insertPosition = 1
 *
 * --------------------------------
 *
 * Read:
 * 0
 *
 * Ignore
 *
 * --------------------------------
 *
 * Read:
 * 3
 *
 * Swap index 3 with index 1
 *
 * [1,3,0,0,12]
 *
 * insertPosition = 2
 *
 * --------------------------------
 *
 * Read:
 * 12
 *
 * Swap index 4 with index 2
 *
 * [1,3,12,0,0]
 *
 * insertPosition = 3
 *
 * Final Output:
 *
 * [1,3,12,0,0]
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(1)
 */

function moveZeroesToEndSwap(arr) {

    let insertPosition = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {

            [arr[i], arr[insertPosition]] =
                [arr[insertPosition], arr[i]];

            insertPosition++;
        }

    }

    return arr;
}


/*
 * ============================================================
 * TEST CASES - SWAP APPROACH
 * ============================================================
 */

console.log(moveZeroesToEndSwap([0,1,0,3,12]));
// Expected: [1,3,12,0,0]

console.log(moveZeroesToEndSwap([1,2,3]));
// Expected: [1,2,3]

console.log(moveZeroesToEndSwap([0,0,1]));
// Expected: [1,0,0]

console.log(moveZeroesToEndSwap([0,0,0]));
// Expected: [0,0,0]

console.log(moveZeroesToEndSwap([4,0,5,0,6]));
// Expected: [4,5,6,0,0]


/*
 * ============================================================
 * APPROACH COMPARISON
 * ============================================================
 *
 * Solution 1:
 * Overwrite + Fill Zeroes
 *
 * ✔ Very easy to understand
 * ✔ Two clear phases
 * ✔ O(n) Time
 * ✔ O(1) Space
 *
 *
 * Solution 2:
 * Swap-Based Two Pointers
 *
 * ✔ Single traversal
 * ✔ In-place swapping
 * ✔ O(n) Time
 * ✔ O(1) Space
 *
 *
 * Which One Should You Use?
 *
 * Both are optimal.
 *
 * The overwrite approach is usually easier to explain in an
 * interview.
 *
 * The swap approach is shorter and is also commonly accepted
 * on coding platforms like LeetCode.
 */