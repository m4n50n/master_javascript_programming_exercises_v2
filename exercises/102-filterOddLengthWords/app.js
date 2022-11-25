function filterOddLengthWords(words) {
    return words.filter(function(value, index) {
        return value.length % 2 != 0;
    });
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']