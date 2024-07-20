const array = [
  {
    name: "Prashanth",
    age: 22,
  },
  {
    name: "Ashok",
    age: 42,
  },
  {
    name: "Maheswary",
    age: 40,
  },
];
const Filter = array.filter((value) => value.age >= 41);
console.log(Filter);

// returns array of values that satifies the condition.



const Find=array.find((value)=>(
    value.age>40
))
console.log(Find)

