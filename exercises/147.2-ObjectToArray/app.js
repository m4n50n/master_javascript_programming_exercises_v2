function listAllValues(obj) {
  let arr = [];
  for (o in obj) {
    arr.push(obj[o]);
  }

  return arr;
}

console.log(listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
}));