var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    for (const o in obj) {
        if (obj[o] > num) {
            delete obj[o];
        }
    }

    return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }