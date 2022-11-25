const getNthElementOfProperty = (objeto, key, elemento) => {
    if (typeof(objeto[key]) === "undefined" || objeto[key].length === 0 || !Array.isArray(objeto[key])) { return undefined; }
    
    return objeto[key][elemento];
}

var obj = {
    key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2