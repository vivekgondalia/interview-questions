//Question 1 :
//function definition vs function expression

foo();
bar();

function foo() {
  console.log("Foo called.");
}

//ERROR : bar was called before it was declared
const bar = () => console.log("Bar called.");

//Problem 2:

const Person = {
  name: "Vivek",
  age: 30,
};

//Output ; [ ["name", "Vivek"], ["age", 30] ]
//Short Answer : console.log(Object.entries(obj));

const getObjectEntries = (obj) => {
  const keys = Object.keys(obj); //["name", "age"]

  const result = keys.map((key) => {
    let value = obj[key];
    return [key, value];
  });

  console.log(result);
};

getObjectEntries(Person);
