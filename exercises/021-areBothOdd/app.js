const areBothOdd = (n1, n2) => {
    return n1 % 2 !== 0 && n2 % 2 !== 0;
}

var output = areBothOdd(1, 3);
console.log(output); // --> true