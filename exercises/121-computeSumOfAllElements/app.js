function computeSumOfAllElements(arr) {
  let sum = 0;
  arr.forEach(function(value, index) {
    sum += value;
  });

  return sum;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6