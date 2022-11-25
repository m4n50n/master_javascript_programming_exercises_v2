function removeOddValues(obj) {
    for (const o in obj) {
        if (isOdd(obj[o])) {
            delete obj[o];
        }
    }
}
function isOdd(num) {
    if (num % 2 != 0) {
        return true;
    }

    return false;
}

var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }