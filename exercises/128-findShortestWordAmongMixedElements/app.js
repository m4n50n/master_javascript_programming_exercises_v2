function findShortestWordAmongMixedElements(arr) {
    if (arr.length == 0 || arr.filter(function(value, index) {
        return typeof value == "string";
    }).length == 0) { return ""; }

    let k = false;
    arr.map(function(value, index) { 
        if (isNaN(value)) {
            k = (!k) ? index : (value > arr[k]) ? index : k;
        }
    });

    return arr[k];
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'