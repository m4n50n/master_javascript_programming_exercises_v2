function isPersonOldEnoughToDrinkAndDrive(person) {
  return person.age >= 21 && person.age >= 16;
}

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false