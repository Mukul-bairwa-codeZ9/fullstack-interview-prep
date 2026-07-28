
/*
============================================================
PROBLEM #3 — FIND DUPLICATE NUMBERS
============================================================

Problem:

Given an array of numbers, return all numbers that appear
more than once.

Each duplicate number should appear ONLY ONCE in the result.

Example:

Input:
[1, 2, 3, 2, 4, 5, 1]

Output:
[2, 1]


Another example:

Input:
[5, 5, 5, 10, 10, 20]

Output:
[5, 10]

Even though 5 appears three times, it should appear only
once in the result.


============================================================
IMPORTANT CONCEPT #1 — WHAT IS A DUPLICATE?
============================================================

A number is a duplicate when we have already encountered
that number earlier in the array.

Example:

[1, 2, 3, 2]

Process:

1 → first occurrence
2 → first occurrence
3 → first occurrence
2 → already seen → DUPLICATE


============================================================
IMPORTANT CONCEPT #2 — TWO WAYS TO SOLVE THIS
============================================================

Approach 1:
Frequency counting using Object

Approach 2:
Tracking previously seen values using Set


We will understand BOTH because they represent two
important interview patterns.


============================================================
APPROACH 1 — YOUR ORIGINAL APPROACH
============================================================

Your idea:

Maintain an object that stores the history/count of
each number.

Example:

Input:

[1, 2, 2, 3, 3, 3]

Object eventually becomes:

{
    1: 1,
    2: 2,
    3: 3
}


Meaning:

1 appeared 1 time
2 appeared 2 times
3 appeared 3 times


IMPORTANT:

This is called:

FREQUENCY COUNTING


============================================================
YOUR ORIGINAL LOGIC
============================================================

For every number:

If it does NOT exist in the object:

    obj[n] = 1

Otherwise:

    obj[n]++

If the count becomes exactly 2:

    result.push(n)


Why exactly 2?

Because we only want to add the value to the result
the FIRST time it becomes a duplicate.


Example:

[5, 5, 5, 5]

First 5:
count = 1
don't add

Second 5:
count = 2
ADD 5

Third 5:
count = 3
don't add

Fourth 5:
count = 4
don't add


Final:

[5]


============================================================
YOUR SOLUTION — OBJECT / FREQUENCY COUNTING
============================================================
*/

function duplicatesUsingObject(data) {
    let obj = {};
    let result = [];

    for (let n of data) {
        if (obj[n] === undefined) {
            obj[n] = 1;
        } else {
            obj[n]++;

            // Only add when it becomes a duplicate
            // for the first time.
            if (obj[n] === 2) {
                result.push(n);
            }
        }
    }

    return result;
}


/*
============================================================
EXAMPLE
============================================================

Input:

[1, 2, 3, 4, 5, 1, 3, 4, 21, 8, 2]

Frequency:

1  → 2
2  → 2
3  → 2
4  → 2
5  → 1
21 → 1
8  → 1

Result:

[1, 3, 4, 2]

Notice:

The order depends on when each value becomes a duplicate.


============================================================
WHY NOT obj[n] > 1?
============================================================

This is WRONG for our requirement:

if (obj[n] > 1) {
    result.push(n);
}


Consider:

[1, 1, 1, 1]

It would produce:

1 → count 1 → nothing
1 → count 2 → push 1
1 → count 3 → push 1
1 → count 4 → push 1

Result:

[1, 1, 1]  ❌


We only want:

[1]  ✅


Therefore:

if (obj[n] === 2)

is correct.


============================================================
WHY === 2?
============================================================

Because 2 means:

"This is the SECOND time I have seen this number."

That is exactly when it becomes a duplicate.


============================================================
APPROACH 2 — SET SOLUTION
============================================================

Now let's look at the cleaner approach.

Question:

Do we actually need to know HOW MANY times a number
appeared?

For this problem:

NO.

We only need to know:

"Have I seen this number before?"


That is exactly what Set is designed for.


============================================================
SET
============================================================

Set stores UNIQUE values.

Example:

const set = new Set();

set.add(10);
set.add(20);
set.add(10);

The Set contains:

{10, 20}


The second 10 is not stored again.


Useful Set methods:

set.add(value)
set.has(value)
set.delete(value)
set.size


For our problem:

seen.has(n)

means:

"Have I already encountered n?"


============================================================
SET ALGORITHM
============================================================

We maintain two Sets:

seen
    ↓
Values encountered for the first time.

duplicates
    ↓
Values that appeared more than once.


Process:

Current number
       ↓
Is it in seen?
    /       \
  NO         YES
  ↓           ↓
Add to      Add to
seen        duplicates


============================================================
SET SOLUTION
============================================================
*/

function duplicatesUsingSet(data) {
    const seen = new Set();
    const duplicates = new Set();

    for (let n of data) {
        if (seen.has(n)) {
            duplicates.add(n);
        } else {
            seen.add(n);
        }
    }

    return [...duplicates];
}


/*
============================================================
WHY IS duplicates ALSO A SET?
============================================================

Consider:

[5, 5, 5, 5]

When processing:

1st 5:
seen = {5}

2nd 5:
duplicates = {5}

3rd 5:
duplicates.add(5)

But Set does NOT store another 5.

4th 5:
duplicates.add(5)

Still:

duplicates = {5}


Therefore:

[5, 5, 5, 5]

becomes:

[5]


============================================================
TRACE — SET APPROACH
============================================================

Input:

[1, 2, 3, 2, 4, 5, 1]


Start:

seen = {}
duplicates = {}


1:

1 is NOT in seen

seen = {1}


2:

2 is NOT in seen

seen = {1, 2}


3:

3 is NOT in seen

seen = {1, 2, 3}


2:

2 IS already in seen

duplicates = {2}


4:

4 is NOT in seen

seen = {1, 2, 3, 4}


5:

5 is NOT in seen

seen = {1, 2, 3, 4, 5}


1:

1 IS already in seen

duplicates = {2, 1}


Final:

duplicates = {2, 1}


Convert Set to Array:

[...duplicates]

Result:

[2, 1]


============================================================
OBJECT VS SET
============================================================

Object approach:

{
    1: 2,
    2: 1,
    3: 4
}

Useful when we need:

"How many times did this value appear?"


Set approach:

Set {
    1,
    2,
    3
}

Useful when we need:

"Have I seen this value before?"


REMEMBER:

Need COUNT?
    ↓
Map / Object

Need EXISTENCE / LOOKUP?
    ↓
Set


============================================================
WHEN SHOULD WE USE MAP?
============================================================

Map is generally preferable when we specifically need
a frequency table or arbitrary key/value relationships.

Example:

const frequency = new Map();

for (const n of data) {
    frequency.set(
        n,
        (frequency.get(n) ?? 0) + 1
    );
}


For:

[1, 2, 2, 3, 3, 3]

Map becomes conceptually:

1 → 1
2 → 2
3 → 3


We'll practice Map separately.


============================================================
OBJECT VS MAP
============================================================

Object:

const obj = {};

Map:

const map = new Map();


Both can be used for counting.

For modern JavaScript interview problems:

Map is often clearer when the requirement is explicitly
"frequency counting" or arbitrary key/value lookup.

Object is still useful and is important to understand.


============================================================
IMPORTANT SET CONCEPT
============================================================

Set stores unique values.

Example:

const numbers = new Set([
    1,
    2,
    2,
    3,
    3
]);

console.log(numbers);

Output conceptually:

Set {1, 2, 3}


Therefore Set is excellent for:

- Duplicate detection
- Removing duplicates
- Checking whether something was seen
- Membership / existence checks


============================================================
TIME COMPLEXITY
============================================================

Object approach:

Time:
O(n)

We loop through the array once.

Space:
O(n)

In the worst case, every number is unique and the object
stores every number.


Set approach:

Time:
O(n) average

Set.has()
Set.add()

are average O(1) operations.

Space:
O(n)

Because seen and duplicates can grow with input size.


IMPORTANT:

The correct complexity is NOT:

O(1) space

because our Set/Object grows depending on the input.


============================================================
WHY NOT NESTED LOOPS?
============================================================

A beginner solution might do:

For every number:
    check every other number

That creates:

O(n²)

Example:

[1, 2, 3, 2, 4]

For each element we potentially scan the rest.


Our Set/Object approach reduces this to:

O(n) average time


This is an important interview optimization pattern:

Brute Force:
O(n²)

Hash-based lookup:
O(n)


============================================================
WHY NOT SORT?
============================================================

We could sort the array first.

But sorting costs:

O(n log n)

And it can mutate the original array if we directly call:

data.sort()


For this problem, we don't need sorting.

Set/Object lookup gives us:

O(n) average time.


============================================================
EDGE CASES
============================================================
*/

console.log(
    duplicatesUsingSet([1, 2, 3, 2, 4, 5, 1])
);
// Output: [2, 1]


console.log(
    duplicatesUsingSet([10, 20, 30, 40])
);
// Output: []


console.log(
    duplicatesUsingSet([5, 5, 5, 10, 10, 20])
);
// Output: [5, 10]


console.log(
    duplicatesUsingSet([1, 1, 1, 1])
);
// Output: [1]


console.log(
    duplicatesUsingSet([-1, -2, -1, -3, -2])
);
// Output: [-1, -2]


console.log(
    duplicatesUsingSet([])
);
// Output: []


/*
============================================================
TESTING YOUR OBJECT SOLUTION
============================================================
*/

console.log(
    duplicatesUsingObject([1, 2, 3, 2, 4, 5, 1])
);
// Output: [2, 1]


console.log(
    duplicatesUsingObject([10, 20, 30, 40])
);
// Output: []


console.log(
    duplicatesUsingObject([5, 5, 5, 10, 10, 20])
);
// Output: [5, 10]


console.log(
    duplicatesUsingObject([1, 1, 1, 1])
);
// Output: [1]


console.log(
    duplicatesUsingObject([-1, -2, -1, -3, -2])
);
// Output: [-1, -2]


/*
============================================================
EXPECTED OUTPUT
============================================================

SET:

[2, 1]
[]
[5, 10]
[1]
[-1, -2]
[]


OBJECT:

[2, 1]
[]
[5, 10]
[1]
[-1, -2]


============================================================
INTERVIEW-READY EXPLANATION
============================================================

If the interviewer asks:

"How would you find duplicate numbers in an array?"


Answer:

"I can solve this using a Set-based lookup.

I'll maintain one Set called seen to store values that
I've already encountered.

For every element, I'll check whether it already exists
in seen.

If it does exist, that means the current element is a
duplicate, so I'll add it to another Set called duplicates.

If it doesn't exist, I'll add it to seen.

Using a Set for duplicates also guarantees that each
duplicate value appears only once in the final result.

The time complexity is O(n) on average because Set lookup
and insertion are O(1) on average.

The space complexity is O(n) because the Sets can grow
with the number of unique values."


============================================================
MUST-KNOW CONCEPTS FROM THIS PROBLEM
============================================================

1. Duplicate detection

2. Frequency counting

3. Object as lookup table

4. Map for frequency counting

5. Set for unique values

6. Set.has()

7. Set.add()

8. Spread operator:
   [...set]

9. Hash-based lookup

10. O(1) average lookup

11. O(n) overall solution

12. O(n²) brute-force solution

13. O(n log n) sorting approach

14. Time complexity

15. Space complexity

16. Edge-case handling

17. Avoiding duplicate results

18. Difference between:
    "Have I seen it?"
    and
    "How many times have I seen it?"


============================================================
MOST IMPORTANT RULE TO REMEMBER
============================================================

If the question is:

"Have I seen this before?"

Think:

Set


If the question is:

"How many times did I see this?"

Think:

Map / Object


If the question is:

"Give me the second largest DISTINCT value"

Think:

Track state with variables


============================================================
FINAL PREFERRED SOLUTION
============================================================

For THIS problem:

Set is the cleanest approach.

Time:
O(n) average

Space:
O(n)

Code:

function duplicatesUsingSet(data) {
    const seen = new Set();
    const duplicates = new Set();

    for (let n of data) {
        if (seen.has(n)) {
            duplicates.add(n);
        } else {
            seen.add(n);
        }
    }

    return [...duplicates];
}
*/

