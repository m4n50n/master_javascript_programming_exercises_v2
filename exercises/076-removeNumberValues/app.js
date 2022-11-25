var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    for (const o in obj) {
        //if (typeof obj[o] == "number") {
        if (!isNaN(obj[o])) {
            delete obj[o];
        }
    }

    return obj;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }