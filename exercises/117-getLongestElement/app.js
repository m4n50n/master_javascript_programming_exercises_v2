function getLongestElement(arr) {
    if (arr.length == 0) { return ""; }
    
    return arr.sort(function(a, b) {
        return b.length - a.length;
    })[0];
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'