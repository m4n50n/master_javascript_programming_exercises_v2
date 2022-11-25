const getIndexOf = (caracter, string) => {
    let exist = -1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == caracter) {
            exist = i;
            break;
        }
    }

    return exist;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2