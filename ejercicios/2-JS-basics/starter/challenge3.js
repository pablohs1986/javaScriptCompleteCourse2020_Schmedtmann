function tipsCalculator(bill){
    if (bill < 50){
        return bill * 0.20;
    }else if((bill > 50) && (bill < 200)){
        return bill * 0.15;
    }else if(bill > 200){
        return bill * 0.10;
    }
}

var bills = [124, 48, 268];
var tips = [tipsCalculator(bills[0]), tipsCalculator(bills[1]), tipsCalculator(bills[2])];

console.log(bills);
console.log(tips);

