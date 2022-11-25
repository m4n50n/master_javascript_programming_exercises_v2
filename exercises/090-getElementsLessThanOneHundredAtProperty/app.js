function getElementsLessThan100AtProperty(objeto, key) {
    if (typeof(objeto[key]) === "undefined" || !Array.isArray(objeto[key])) { return []; }

    return objeto[key].filter(value => value < 100);
}

var obj = {
    key: [1000, 10, 50, 10]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [10, 10]