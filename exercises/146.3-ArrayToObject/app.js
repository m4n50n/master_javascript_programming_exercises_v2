function transformEmployeeData(array) {
  let arr = [];

  array.forEach(function(value, index) {
    arr[index] = {};

    for (i = 0; i < value.length; i++) {
      let one = value[i][0];
      let two = value[i][1];

      arr[index][one] = two;
    }
  });

  return arr;
}

var arr = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
];

console.log(transformEmployeeData(arr));