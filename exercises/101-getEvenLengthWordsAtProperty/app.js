function getEvenLengthWordsAtProperty(objeto, key) {
  let arr = [];
  if (typeof objeto[key] == "undefined" || objeto[key].length == 0) {
    return arr;
  }
  else {  
    for (const o in objeto[key]) {
      if (objeto[key][o].length % 2 == 0) { arr.push(objeto[key][o]); }
    };
  }

  return arr;
}

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']