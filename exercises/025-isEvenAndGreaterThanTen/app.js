const isEvenAndGreaterThanTen = (n1) => {
    return n1 % 2 === 0 && n1 > 10;
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false