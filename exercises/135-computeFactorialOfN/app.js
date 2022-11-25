function computeFactorialOfN(n) {
    // 5! = 5 * 4 * 3 * 2 * 1

    let factorial = n;
    let i = n - 1;
    while (i != 1) {
        factorial *= i;
        i--;
    }

    return factorial;
}

var output = computeFactorialOfN(3); console.log(output); // --> 6
var output = computeFactorialOfN(4); console.log(output); // --> 24