var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan(num, obj) {
  for (const s in obj) {
      if (obj[s].length > num) {
          delete obj[s];
      }
  }

  return obj;
}

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }