function getEvenElementsAtProperty(obj, key) {
  let arr = [];
  if (typeof obj[key] != "undefined" && typeof obj[key] == "object" && obj[key].length != 0) {
    for (const o in obj[key]) {
      if (obj[key][o] % 2 == 0) { arr.push(obj[key][o]); }
    };
  }

  return arr;
}

var obj = {
  key: [1000, 11, 50, 17]
};

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]