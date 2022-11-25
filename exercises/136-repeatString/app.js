function repeatString(string, num) {
    let arr = [];
    for (i=0; i<num; i++) {
        arr.push(string);
    }

    return arr.join("");
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'