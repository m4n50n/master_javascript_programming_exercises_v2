function getFirstElementOfProperty(objeto, key) {    
    if (typeof(objeto[key]) === "undefined" || objeto[key].length === 0 || !Array.isArray(objeto[key])) { return undefined; }
    return objeto[key].shift();
}

var obj = {
    key: [1, 2, 4]
};

var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
