var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  if (typeof obj[key] != "undefined" && typeof obj[key] == "object" && obj[key].length != 0) {
    obj[key].pop();
    return obj[key];
  }

  return [];
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]