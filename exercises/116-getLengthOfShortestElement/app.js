function getLengthOfShortestElement(arr) {
    if (arr.length == 0) { return 0; }

    return arr.map(function(value, index) {
        return value.length;
    }).sort()[0];
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3