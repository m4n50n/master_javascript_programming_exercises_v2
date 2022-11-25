function isEitherEvenAndLessThan9(num1, num2) {
    if ((espar(num1) || espar(num2)) & (num1 < 9 && num2 < 9)) {
        return true;
    }

    return false;
}

function espar(num) {
    if (num % 2 == 0) {
        return true;
    }

    return false;
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false