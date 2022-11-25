function sumDigits(num) {
    let neg = (num.toString().split("")[0] === "-") ? true : false;
    let sum = 0;
    
    num = Math.abs(num).toString();
    for (let i = 0; i < num.length; i++) {
        if (i === 0 && neg) {
            sum -= parseInt(num[i]);
        }
        else {
            sum += parseInt(num[i]);
        }
    }     

    return sum;
}

var output = sumDigits(-316);
console.log(output); // --> 4