const isEitherEven = (n1, n2) => {
    return n1 % 2 === 0 || n2 % 2 === 0;
}

var output = isEitherEven(1, 4);
console.log(output); // --> true (verdadero)