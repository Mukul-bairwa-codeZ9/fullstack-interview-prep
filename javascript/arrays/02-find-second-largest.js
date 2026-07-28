/*
============================================================
PROBLEM #2 — FIND THE SECOND LARGEST DISTINCT NUMBER
============================================================

Problem:
Given an array of numbers, return the second largest
DISTINCT number.

Example:

Input:
[10, 5, 20, 8, 15]

Output:
15

Why?
Largest = 20
Second largest = 15


Another example:

Input:
[10, 20, 20, 15, 8]

Output:
15

The duplicate 20 does NOT count as the second largest.

============================================================
IMPORTANT CONCEPT — DISTINCT VALUES
============================================================

"Second largest distinct number" means duplicate values
are ignored.

Example:

[10, 20, 20, 15]

Unique values:

10
15
20

Largest:
20

Second largest:
15

Therefore:

secondLargest([10, 20, 20, 15])
// 15


============================================================
IMPORTANT CONCEPT — TRACKING STATE
============================================================

While looping through the array, we only need to remember
two values:

max
    ↓
largest number found so far

secondMax
    ↓
second largest distinct number found so far


============================================================
IMPORTANT CONCEPT — SENTINEL VALUE
============================================================

We initialize:

let max = -Infinity;
let secondMax = -Infinity;

Why -Infinity?

Because the input can contain negative numbers.

BAD:

let max = 0;

This fails for:

[-10, -5, -20]

Because all numbers are smaller than 0.

GOOD:

let max = -Infinity;

Now negative numbers work correctly.


============================================================
ALGORITHM 1 — ONE PASS / TWO VARIABLES
============================================================

This is the BEST solution for an interview.

Steps:

1. Start max with -Infinity.
2. Start secondMax with -Infinity.
3. Loop through every number.
4. If current number is greater than max:
      secondMax = max
      max = current
5. Otherwise, if current number is:
      smaller than max
      AND
      greater than secondMax

   then:

      secondMax = current

6. After the loop:
   If secondMax is still -Infinity,
   there is no second distinct number.

   Return null.

7. Otherwise return secondMax.


============================================================
CODE
============================================================
*/

function secondLargest(numbers) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];

        // Found a new largest number
        if (current > max) {
            secondMax = max;
            max = current;
        }

        // Current number can become second largest
        // current < max prevents duplicate max values
        // from becoming secondMax.
        else if (current < max && current > secondMax) {
            secondMax = current;
        }
    }

    // No second DISTINCT value exists
    if (secondMax === -Infinity) {
        return null;
    }

    return secondMax;
}


/*
============================================================
STEP-BY-STEP TRACE
============================================================

Input:

[10, 20, 20, 15, 8]


Initial:

max       = -Infinity
secondMax = -Infinity


--------------------------------
Iteration 1
current = 10
--------------------------------

10 > -Infinity

YES

secondMax = -Infinity
max = 10


--------------------------------
Iteration 2
current = 20
--------------------------------

20 > 10

YES

secondMax = 10
max = 20


--------------------------------
Iteration 3
current = 20
--------------------------------

20 > 20

NO

20 < 20

NO

Therefore duplicate 20 is ignored.


--------------------------------
Iteration 4
current = 15
--------------------------------

15 > 20

NO

15 < 20

YES

15 > 10

YES

Therefore:

secondMax = 15


--------------------------------
Iteration 5
current = 8
--------------------------------

8 > 20

NO

8 < 20

YES

8 > 15

NO

secondMax remains 15.


FINAL RESULT:

max       = 20
secondMax = 15

Output:

15


============================================================
WHY DO WE NEED current < max?
============================================================

Consider:

[10, 20, 20, 15]

When we reach the second 20:

current = 20
max = 20

If we only checked:

current > secondMax

then:

20 > 10

would be TRUE.

We would incorrectly make:

secondMax = 20

But we don't want that.

We want the SECOND DISTINCT number.

Therefore we require:

current < max

So:

20 < 20

is FALSE.

The duplicate is ignored.


============================================================
EDGE CASE — ONLY ONE VALUE
============================================================

Input:

[10]

There is no second largest DISTINCT value.

Result:

null


============================================================
EDGE CASE — DUPLICATE VALUES ONLY
============================================================

Input:

[10, 10, 10]

There is still only one distinct value.

Result:

null


============================================================
EDGE CASE — NEGATIVE NUMBERS
============================================================

Input:

[-10, -5, -20, -2]

Largest:

-2

Second largest:

-5

Result:

-5


============================================================
EDGE CASE — TWO VALUES
============================================================

Input:

[100, 50]

Largest:

100

Second largest:

50

Result:

50


============================================================
TIME COMPLEXITY
============================================================

We loop through the array once.

Therefore:

Time Complexity = O(n)


============================================================
SPACE COMPLEXITY
============================================================

We only create two variables:

max
secondMax

The amount of extra memory does NOT grow with the
input size.

Therefore:

Space Complexity = O(1)


IMPORTANT:

O(2) is NOT normally written for this.

Even though there are two variables:

max
secondMax

we write:

O(1)

because they are constant space.


============================================================
ALGORITHM 2 — SORTING
============================================================

Another possible solution is:

1. Sort the array.
2. Find the second distinct value.

Example:

[10, 20, 20, 15]

After sorting:

[10, 15, 20, 20]

Second largest distinct:

15

However, this is NOT our preferred solution because
sorting takes:

O(n log n)

And the interviewer specifically asked us to solve it
in one loop.


============================================================
SORTING SOLUTION
============================================================
*/

function secondLargestUsingSort(numbers) {
    if (numbers.length < 2) {
        return null;
    }

    // Copy first so we don't mutate the original array
    const sorted = [...numbers].sort((a, b) => b - a);

    const largest = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] < largest) {
            return sorted[i];
        }
    }

    return null;
}


/*
============================================================
SORTING COMPLEXITY
============================================================

Time:

O(n log n)

Space:

O(n)

because we created:

const sorted = [...numbers]


============================================================
ALGORITHM 3 — TWO PASSES
============================================================

Another valid approach:

PASS 1:
Find the largest number.

PASS 2:
Find the largest number smaller than max.

Example:

[10, 20, 20, 15]

Pass 1:

max = 20

Pass 2:

Find the largest value where:

number < max

Result:

15


Complexity:

Time  = O(n)
Space = O(1)

Although this is O(n), it uses two loops instead of one.
*/


function secondLargestUsingTwoPasses(numbers) {
    if (numbers.length < 2) {
        return null;
    }

    let max = -Infinity;

    // PASS 1 — Find largest
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    let secondMax = -Infinity;

    // PASS 2 — Find second largest distinct
    for (let i = 0; i < numbers.length; i++) {
        if (
            numbers[i] < max &&
            numbers[i] > secondMax
        ) {
            secondMax = numbers[i];
        }
    }

    if (secondMax === -Infinity) {
        return null;
    }

    return secondMax;
}


/*
============================================================
TEST CASES
============================================================
*/

console.log("===== ONE PASS SOLUTION =====");

console.log(
    secondLargest([10, 5, 20, 8, 15])
);
// Output: 15


console.log(
    secondLargest([10, 20, 20, 15, 8])
);
// Output: 15


console.log(
    secondLargest([-10, -5, -20, -2])
);
// Output: -5


console.log(
    secondLargest([100, 50])
);
// Output: 50


console.log(
    secondLargest([10])
);
// Output: null


console.log(
    secondLargest([10, 10])
);
// Output: null


console.log(
    secondLargest([5, 5, 5, 5])
);
// Output: null


console.log(
    secondLargest([10, 20, 20, 20])
);
// Output: 10


console.log(
    secondLargest([-10, -10, -20, -30])
);
// Output: -20


console.log(
    secondLargest([0, -1, -2])
);
// Output: -1


/*
============================================================
EXPECTED OUTPUT
============================================================

===== ONE PASS SOLUTION =====

15
15
-5
50
null
null
null
10
-20
-1


============================================================
INTERVIEW-READY EXPLANATION
============================================================

If the interviewer asks:

"How would you find the second largest number?"

You can answer:

"I need the second largest DISTINCT value, so duplicate
values should not count.

I can solve this in one pass by maintaining two variables:
max and secondMax.

Whenever I find a new maximum, the previous maximum becomes
the second maximum.

Otherwise, if the current value is smaller than max but
greater than secondMax, I update secondMax.

I initialize both values to -Infinity so that negative
numbers are handled correctly.

After the loop, if secondMax is still -Infinity, there
was no second distinct value, so I return null.

The time complexity is O(n) because I traverse the array
once, and the space complexity is O(1) because I only use
a fixed number of variables."


============================================================
MUST-KNOW INTERVIEW CONCEPTS FROM THIS PROBLEM
============================================================

1. Distinct values
2. Duplicate handling
3. State tracking
4. Sentinel values
5. -Infinity
6. Negative numbers
7. Edge cases
8. One-pass algorithm
9. Two-pass algorithm
10. Sorting approach
11. O(n) time
12. O(n log n) sorting
13. O(1) space
14. Array mutation
15. Off-by-one errors
16. Defining behavior when a result doesn't exist


============================================================
FINAL ANSWER
============================================================

Preferred algorithm:

Time Complexity:
O(n)

Space Complexity:
O(1)

Best approach:
ONE PASS + TWO VARIABLES

Variables:

max
secondMax

Edge case:

No second distinct value
        ↓
return null
*/