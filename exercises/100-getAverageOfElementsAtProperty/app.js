function getAverageOfElementsAtProperty(obj, key) {
  if (typeof(obj[key]) === "undefined" || obj[key].length === 0 || !Array.isArray(obj[key])) { return 0; }

  let sum = 0;
  let total = 0;
  let tok = typeof obj[key];


  if (tok == "undefined" || tok != "object" || tok.length == 0) { return 0; }
  
  obj[key].forEach(function(value, index) {
    total++;
    sum += value;
  });

  return sum / total;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  
