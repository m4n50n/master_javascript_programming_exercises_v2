const countAllCharacters = (string) => {
    let objeto = {};
    
    for(i = 0; i < string.length; i++) {
        (typeof objeto[string[i]] === "undefined") ? objeto[string[i]] = 1 : objeto[string[i]]++; 
    }

    return objeto;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}