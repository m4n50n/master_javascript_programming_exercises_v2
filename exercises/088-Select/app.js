const select = (array, objeto) => {
    let new_object = {};
    for (let o in objeto) {
        if (array.includes(o)) {
            new_object[o] = objeto[o];
        }
    }

    return new_object;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }