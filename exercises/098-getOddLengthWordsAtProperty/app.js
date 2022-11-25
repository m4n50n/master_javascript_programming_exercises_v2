const getOddLengthWordsAtProperty = (object, key) => {
    if (typeof(object[key]) === "undefined" || !Array.isArray(object[key])) { return []; }

    return object[key].filter(value => value.length % 2 != 0);
}

var obj = {
    key: ['It', 'has', 'some', 'words']
};

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']