function addToBackOfNew(arr, element) {
    let n = [];
    n = n.concat(arr);
    n.push(element);

    return n;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]