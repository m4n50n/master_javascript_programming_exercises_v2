function getElementsGreaterThan10AtProperty(objeto, key) {
    if (typeof(objeto[key]) === "undefined" || !Array.isArray(objeto[key])) { return []; }

    return objeto[key].filter(value => value > 10);
}

var obj = {
    key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]