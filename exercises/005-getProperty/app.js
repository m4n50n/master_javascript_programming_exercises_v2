const getProperty = (t, a) => {
  return t[a];
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output);