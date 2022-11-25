function getAllWords(str) {
    return str.split(" ");
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']