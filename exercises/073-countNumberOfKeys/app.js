function countNumberOfKeys(obj) {
    let num_prop = 0;
    for (const o in obj) {
        num_prop++;
    }

    return num_prop;
}

var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3