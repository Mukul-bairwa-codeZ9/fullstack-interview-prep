/*
 * ============================================================
 * Problem #12: Best Time to Buy and Sell Stock
 * LeetCode: 121
 * ============================================================
 *
 * Problem:
 * You are given an array where prices[i] represents the stock
 * price on the i-th day.
 *
 * You may buy the stock only once and sell it only once.
 *
 * You must buy before you sell.
 *
 * Return the maximum profit you can achieve.
 *
 * If no profit is possible, return 0.
 *
 * ============================================================
 * Examples
 * ============================================================
 *
 * Input:
 * [7,1,5,3,6,4]
 *
 * Output:
 * 5
 *
 * Explanation:
 * Buy at 1 and sell at 6.
 * Profit = 6 - 1 = 5
 *
 *
 * Input:
 * [7,6,4,3,1]
 *
 * Output:
 * 0
 *
 * Explanation:
 * Prices always decrease, so no profit can be made.
 *
 *
 * Input:
 * [2,4,1]
 *
 * Output:
 * 2
 *
 * ============================================================
 * MUST-KNOW CONCEPTS
 * ============================================================
 *
 * 1. Running Minimum
 * ------------------
 * We continuously keep track of the minimum stock price
 * encountered so far while traversing the array.
 *
 * This represents the best day to buy up to the current day.
 *
 *
 * 2. Running Maximum Profit
 * -------------------------
 * For every day's price, calculate the profit if we sell today:
 *
 * profit = currentPrice - buyPrice
 *
 * If this profit is greater than the previous maximum,
 * update the maximum profit.
 *
 *
 * 3. Greedy Approach
 * ------------------
 * At every step, we make the locally optimal decision:
 *
 * - Update the cheapest buying price.
 * - Update the highest profit.
 *
 * This guarantees the global optimum in one traversal.
 *
 *
 * 4. One Pass Traversal
 * ---------------------
 * We only traverse the array once.
 *
 * No nested loops are required.
 *
 *
 * 5. Why Not Sorting?
 * -------------------
 * Sorting changes the order of days.
 *
 * Example:
 *
 * Original:
 * [7,1,5,3,6,4]
 *
 * Sorted:
 * [1,3,4,5,6,7]
 *
 * Sorting loses the original buying and selling order,
 * making the solution incorrect.
 *
 *
 * 6. Complexity
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
 * Initialize:
 *
 * buy = prices[0]
 *
 * maxProfit = 0
 *
 *
 * Step 2
 *
 * Traverse the array.
 *
 *
 * Step 3
 *
 * If the current price is smaller than buy,
 * update buy.
 *
 *
 * Step 4
 *
 * Otherwise,
 * calculate today's profit:
 *
 * profit = currentPrice - buy
 *
 *
 * Step 5
 *
 * If profit is greater than maxProfit,
 * update maxProfit.
 *
 *
 * Step 6
 *
 * Return maxProfit.
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


const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {

    let maxProfit = 0;
    let buy = prices[0];

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < buy) {

            buy = prices[i];

        } else {

            let profit = prices[i] - buy;

            if (profit > maxProfit) {
                maxProfit = profit;
            }

        }

    }

    return maxProfit;
}

console.log(maxProfit(prices));


/*
 * ============================================================
 * STEP-BY-STEP TRACE
 * ============================================================
 *
 * Input:
 *
 * [7,1,5,3,6,4]
 *
 * --------------------------------
 *
 * buy = 7
 *
 * maxProfit = 0
 *
 * --------------------------------
 *
 * Day 1
 *
 * Price = 7
 *
 * buy = 7
 *
 * profit = 0
 *
 * maxProfit = 0
 *
 * --------------------------------
 *
 * Day 2
 *
 * Price = 1
 *
 * buy = 1
 *
 * --------------------------------
 *
 * Day 3
 *
 * Price = 5
 *
 * profit = 5 - 1 = 4
 *
 * maxProfit = 4
 *
 * --------------------------------
 *
 * Day 4
 *
 * Price = 3
 *
 * profit = 3 - 1 = 2
 *
 * maxProfit remains 4
 *
 * --------------------------------
 *
 * Day 5
 *
 * Price = 6
 *
 * profit = 6 - 1 = 5
 *
 * maxProfit = 5
 *
 * --------------------------------
 *
 * Day 6
 *
 * Price = 4
 *
 * profit = 4 - 1 = 3
 *
 * maxProfit remains 5
 *
 * --------------------------------
 *
 * Return:
 *
 * 5
 */


/*
 * ============================================================
 * VISUAL REPRESENTATION
 * ============================================================
 *
 * Prices:
 *
 * [7, 1, 5, 3, 6, 4]
 *
 * buy = 7
 * maxProfit = 0
 *
 * -----------------------------
 *
 * Read 7
 *
 * buy = 7
 *
 * -----------------------------
 *
 * Read 1
 *
 * buy = 1
 *
 * -----------------------------
 *
 * Read 5
 *
 * profit = 4
 *
 * maxProfit = 4
 *
 * -----------------------------
 *
 * Read 3
 *
 * profit = 2
 *
 * maxProfit = 4
 *
 * -----------------------------
 *
 * Read 6
 *
 * profit = 5
 *
 * maxProfit = 5
 *
 * -----------------------------
 *
 * Read 4
 *
 * profit = 3
 *
 * maxProfit = 5
 */


/*
 * ============================================================
 * WHY RUNNING MINIMUM?
 * ============================================================
 *
 * Instead of checking every previous day for the cheapest
 * buying price, we simply remember the minimum price seen
 * so far.
 *
 * This avoids nested loops and reduces the time complexity
 * from O(n²) to O(n).
 */


/*
 * ============================================================
 * TEST CASES
 * ============================================================
 */

console.log(maxProfit([7,1,5,3,6,4]));
// Expected: 5

console.log(maxProfit([7,6,4,3,1]));
// Expected: 0

console.log(maxProfit([2,4,1]));
// Expected: 2

console.log(maxProfit([1,2]));
// Expected: 1

console.log(maxProfit([5]));
// Expected: 0

console.log(maxProfit([2,1,2,1,0,1,2]));
// Expected: 2


/*
 * ============================================================
 * EXPECTED OUTPUT
 * ============================================================
 *
 * 5
 * 0
 * 2
 * 1
 * 0
 * 2
 */


/*
 * ============================================================
 * INTERVIEW ANSWER
 * ============================================================
 *
 * "I solve this problem using a greedy approach by maintaining
 * two variables:
 *
 * - buy: the minimum stock price seen so far.
 * - maxProfit: the maximum profit found so far.
 *
 * While traversing the array, I first update the buying price
 * whenever I find a lower price.
 *
 * Otherwise, I calculate the profit if I sell the stock today:
 *
 * profit = currentPrice - buy
 *
 * If this profit is greater than the current maximum profit,
 * I update maxProfit.
 *
 * Since the array is traversed only once and no extra data
 * structures are used, the solution runs in O(n) time
 * and O(1) space."
 */


/*
 * ============================================================
 * IMPORTANT INTERVIEW CONCEPTS
 * ============================================================
 *
 * 1. Greedy Algorithm
 * 2. Running Minimum
 * 3. Running Maximum
 * 4. One Pass Traversal
 * 5. State Tracking
 * 6. Array Traversal
 * 7. O(n) Time Complexity
 * 8. O(1) Space Complexity
 */


/*
 * ============================================================
 * KEY TAKEAWAY
 * ============================================================
 *
 * The Running Minimum pattern is useful whenever we need to:
 *
 * • Track the smallest value seen so far.
 * • Compute the best future profit or difference.
 * • Optimize brute-force O(n²) solutions to O(n).
 *
 * Pattern:
 *
 * 1. Maintain the minimum value seen so far.
 * 2. Compute the result using the current value.
 * 3. Update the best answer if needed.
 *
 * This is one of the most common greedy patterns used in
 * coding interviews.
 */