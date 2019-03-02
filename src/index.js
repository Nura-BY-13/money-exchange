// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
     
    if (currency <=0) {return {}};
    if (currency >=10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"}};

    var h=Math.floor(currency/50);
    var q=Math.floor((currency-h*50)/25);
    var d=Math.floor((currency-h*50-q*25)/10);
    var n=Math.floor((currency-h*50-q*25-d*10)/5);
    var p=currency-h*50-q*25-d*10-n*5;

    var Arr$ = {};
    Arr$['H']= h;
    Arr$['Q']= q; 
    Arr$['D']= d;
    Arr$['N']= n;
    Arr$['P']= p;
    
    if (h==0) {delete Arr$.H};
    if (q==0) {delete Arr$.Q};
    if (d==0) {delete Arr$.D};
    if (n==0) {delete Arr$.N};
    if (p==0) {delete Arr$.P};
     
    return Arr$;
}
