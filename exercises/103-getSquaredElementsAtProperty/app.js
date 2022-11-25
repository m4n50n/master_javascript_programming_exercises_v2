var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  if (typeof obj[key] == "undefined" || typeof obj[key] != "object" || obj[key].length == 0 || !Array.isArray(obj[key])) {
     return [];
  }

  return obj[key].map(function(value, index) {
    return Math.pow(value, 2);
  });
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]