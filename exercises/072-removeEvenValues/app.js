function removeEvenValues(obj) {
    for (const o in obj) {
        if (isEven(obj[o])) {
            delete obj[o];
        }
    }
}
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }

    return false;
}

var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj); // --> { b: 3 }