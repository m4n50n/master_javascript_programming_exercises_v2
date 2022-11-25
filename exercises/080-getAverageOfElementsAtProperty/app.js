// Write your function here
function getAverageOfElementsAtProperty(object, key) {
    let total = 0;
    let sum = 0;

    if (!Array.isArray(object[key])) { 
        console.log("La propiedad en la key no es un array");
        return 0; 
    }
    if (object[key].length == 0) { 
        console.log("Array vacio en la key"); 
        return 0; 
    }
    
    for (const o in object[key]) {
        if (object[key][o] == "undefined") {
            console.log("No hay ninguna propiedad en la key");
            return 0;
        }

        total++;
        sum += object[key][o];
    }

    return sum / total;
}

var obj = {
key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2