function removeStringValues(obj) {
    for (o in obj) {
        if (isNaN(obj[o])) {
            delete obj[o];
        }
    }
}

var obj = {
    name: 'Sam',
    age: 20
  }
  removeStringValues(obj);
  console.log(obj); // { age: 20 }