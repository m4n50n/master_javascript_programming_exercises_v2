const keep = (array, key) => array.filter(value => value === key);

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]