prices = [250 , 645 , 300 , 900 , 50]
for (let i = 0 ; i < prices.length ; i++){
    off = prices[i]/10;
    prices[i]-=off;
}
console.log(prices);