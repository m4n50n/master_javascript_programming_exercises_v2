
function filterEvenElements(arr) {
    return arr.filter(function(value, index) {
        return value % 2 == 0;
    });
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
