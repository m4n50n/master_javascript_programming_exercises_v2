function computeProductOfAllElements(arr) {
  let m = 0;

  for (let i = 0; i < arr.length; i++) {
      m = (m == 0) ? 1 : m;
      m *= arr[i];
  }

  return m;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60