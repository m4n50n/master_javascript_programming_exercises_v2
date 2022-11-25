function findMinLengthOfThreeWords(one, two, three) {
    return [one.length, two.length, three.length].sort()[0];
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1