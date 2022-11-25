function flipEveryNChars(input, n) {
    let inverted = "";
    let fin = 0;
    for (i = fin; i < input.length; i++) {
        inverted += input.slice(fin, fin + n).split("").reverse().join("");
        fin += n;
    }

    return inverted;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma