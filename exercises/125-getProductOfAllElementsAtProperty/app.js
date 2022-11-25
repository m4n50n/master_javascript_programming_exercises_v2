var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  let p = 0;

  if (typeof obj[key] != "undefined" && typeof obj[key] == "object" && obj[key].length != 0) {
    for (o in obj[key]) {
      p = (p == 0) ? 1 : p;
      p *= obj[key][o];
    }
  }

  return p;
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24