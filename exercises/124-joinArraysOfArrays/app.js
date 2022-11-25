function joinArrayOfArrays(arr) {
  let f = [];
  for (let i = 0; i < arr.length; i++) {
    f = f.concat(arr[i]);
  }

  return f;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']