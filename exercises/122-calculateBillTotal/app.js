function calculateBillTotal(preTaxAndTipAmount) {
    let imp = 9.5;
    let prop = 15;
    
    let a = (preTaxAndTipAmount * imp) / 100;
    let b = (preTaxAndTipAmount * prop) / 100;

    return a + b + preTaxAndTipAmount;
}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9