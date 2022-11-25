function computeAverageOfNumbers(inputt) {
    if (inputt.length === 0) { return 0; }
    
    let sum = 0;
    let total = 0;

    inputt.forEach(function(value, index) {
        total++;
        sum += value;
    });

    return sum / total;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3