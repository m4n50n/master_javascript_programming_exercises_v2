const addFullNameProperty = (person) => {
  let fullName = person.firstName + " " + person.lastName;
  person.fullName = fullName;
  return person;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'