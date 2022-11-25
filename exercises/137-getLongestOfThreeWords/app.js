function getLongestOfThreeWords(word1, word2, word3) {
    return [word1, word2, word3].sort(function(a, b) {
        return b.length - a.length;
    })[0];
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'