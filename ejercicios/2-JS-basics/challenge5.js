

var expenses = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    billsAndTips: [],

    tipsCalculator(bills){
        tips = [];
        billsAndTips = [];
        
        for (let i = 0; i < bills.length; i++) {
            if (bills[i] < 50){
                this.tips[i] = bills[i] * 0.20;
                billsAndTips[i] = bills[i] + tips[i];
            }else if((bills[i] > 50) && (bills < 200)){
                this.tips[i] = bills[i] * 0.15;
                billsAndTips[i] = bills[i] + tips[i];
            }else if(bills[i] > 200){
                this.tips[i] = bills[i] * 0.10;
                billsAndTips[i] = bills[i] + tips[i];
            }
        }
    }
}

expenses.tipsCalculator(expenses.bills);

console.log(expenses.tips);
console.log(expenses.billsAndTips);


