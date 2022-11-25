function getLengthOfLongestElement(arr) {
    if (arr.length == 0) { return 0; }
    
    return arr.map(function(value, index) {
        return value.length;
    }).sort().pop();
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5