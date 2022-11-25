function findSmallestElement(arr) {
    if (arr.length == 0) { return 0; }

    return arr.sort(function(a, b) {
        return b - a;
    }).pop();
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1