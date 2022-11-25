function countCharacter(str, char) {
    let rep = 0;
    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] == char) {
            rep += 1;
        }
    }

    return rep;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3