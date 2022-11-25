function filterEvenLengthWords(words) {
    return words.filter(function(value, index) {
        return value.length % 2 == 0;
    });
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']