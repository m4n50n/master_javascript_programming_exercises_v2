var obj = {
  key: [5, 4, 15]
};
function getLargestElementAtProperty(obj, key) {
  if (typeof obj[key] == "undefined" || typeof obj[key] != "object" || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }

  return Math.max(...obj[key]);
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4