function findLargest(numbers) {
    let max = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// INPUT : [10, 5, 20, 8, 15, 0, 20, 15, 120, 9000]
// OUTPUT :9000

// Time complexity: O(n) 
// Space complexity: O(1)