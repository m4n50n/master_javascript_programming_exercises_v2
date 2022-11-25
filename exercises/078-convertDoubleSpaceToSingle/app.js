function convertDoubleSpaceToSingle(str) {
    // 1.
    //str = str.replaceAll("  ", " ");
    
    // 2.
    str = str.split("  "); // convertir en array
    str = str.join(" ");
    
    return str;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"