var bobAlcorn = {
  name: "Bob Alcorn",
  age: 59,
  vocation: "Chief Operating Officer",
  isRetired: false
};

console.log(bobAlcorn); //prints the whole object
console.log(bobAlcorn.name); //prints the object, then the value for the name property
console.log(bobAlcorn.age); //same as above, but age

console.log(bobAlcorn.middleName); //undefined bc this property does not exist
