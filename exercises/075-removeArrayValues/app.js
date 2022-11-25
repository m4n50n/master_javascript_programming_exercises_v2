function removeArrayValues(obj) {
    for (const o in obj) {
        if (Array.isArray(obj[o])) {
            delete obj[o];
        }
    }

    return obj;
}

var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }