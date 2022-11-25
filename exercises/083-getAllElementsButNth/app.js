function getAllElementsButNth(array, n) {
    let arr = [];
    array.forEach(function(value, index) { 
        if (index != n) {
            arr.push(value);
        }
    });

    return arr;
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']