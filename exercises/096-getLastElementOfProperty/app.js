const getLastElementOfProperty = (objeto, key) => {
    if (typeof(objeto[key]) === "undefined" || objeto[key].length === 0 || !Array.isArray(objeto[key])) { return undefined; }
    
    return objeto[key][objeto[key].length -1];
}

var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5