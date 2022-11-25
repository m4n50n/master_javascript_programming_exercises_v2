function getAllKeys(obj) {
  let arr = [];
  for (o in obj) {
    arr.push(o);
  }

  return arr;
}

console.log(getAllKeys({
  name : 'Sam',
  age : 25,
  hasPets : true
}));