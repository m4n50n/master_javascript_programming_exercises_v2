function filterOddElements(arr) {
  return arr.filter(function(value, index) {
    return value % 2 != 0;
  });
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]