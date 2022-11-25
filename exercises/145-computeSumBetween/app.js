function computeSumBetween(num1, num2) {
    let sum = 0;
    for (i = num1; i < num2; i++) {
        sum += i;
    }

    return sum;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9