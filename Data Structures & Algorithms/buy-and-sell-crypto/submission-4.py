class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = prices[0]  # Initialize min_price to infinity
        max_profit = 0  # Initialize max_profit to 0
        
        for price in prices:
            if price < min_price:
                min_price = price  # Update min_price to the current price if it's lower
            elif price - min_price > max_profit:
                max_profit = price - min_price  # Update max_profit if the current profit is higher
        
        return max_profit
