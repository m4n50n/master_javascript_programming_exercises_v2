var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    let sum = 0;

    if (typeof obj[key] != "undefined" && typeof obj[key] == "object" && obj[key].length != 0) {    
        for (o in obj[key]) {
            sum += obj[key][o];
        }
    }
  
    return sum;
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13