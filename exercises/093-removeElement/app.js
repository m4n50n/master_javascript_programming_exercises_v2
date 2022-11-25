const removeElement = (array, elemento) => {
    let arr = [];
    array.forEach(function(value, index) {
        if (value != elemento) {
            arr.push(value);
        }
    });

    return arr;
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]