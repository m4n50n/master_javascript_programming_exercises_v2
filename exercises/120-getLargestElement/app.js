function getLargestElement(arr) {
  if (arr.length == 0) { return 0; }

  return arr.sort(function(a, b) {
    return b - a;
  })[0];
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;