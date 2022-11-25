function convertObjectToList(obj) {
  let arr = [];

  for (o in obj) {
    arr.push([o, obj[o]]);
  }

  return arr;
}

console.log(convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
}));