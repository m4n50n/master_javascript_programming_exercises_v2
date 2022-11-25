function multiplyBetween(num1, num2) {
    let multiply = 0;
    for (i = num1; i < num2; i++) {
        multiply = (multiply == 0) ? 1 : multiply;
        multiply *= i;
    }

    return multiply;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24