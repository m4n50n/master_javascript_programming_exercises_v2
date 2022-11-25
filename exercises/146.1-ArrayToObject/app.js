function transformFirstAndLast(array) {
  let objecto = {};
  objecto[array[0]] = array[array.length - 1];

  return objecto;
}

console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));