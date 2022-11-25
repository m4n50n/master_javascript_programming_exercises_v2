function addArrayProperty(o, p, arr) {
  o[p] = arr;
  return o;
}

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]