var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    for (const o in obj) {
        if (obj[o] < num) {
            delete obj[o];
        }
    }

    return obj;
}


removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }