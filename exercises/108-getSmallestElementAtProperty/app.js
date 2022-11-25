var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  if (typeof obj[key] == "undefined" || typeof obj[key] != "object" || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }

  return obj[key].sort()[0];
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1