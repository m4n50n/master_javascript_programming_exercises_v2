function findMaxLengthOfThreeWords(one, two, three) {
    let arr = [one.length, two.length, three.length].sort();
    return arr[arr.length - 1];
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3