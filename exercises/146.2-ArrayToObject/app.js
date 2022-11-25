function fromListToObject(array) {
  let objecto = {};
  array.forEach(function(value, index) {
    objecto[value[0]] = value[1];
  });

  return objecto;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }