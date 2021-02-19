// const name = "Rainer";
// let age = 28;
// const hasHobbies = true;

// age = 29;

// const summarizeUser = (userName, userAge, userHasHobbies) => {

//     return ( 'Name is ' +
//      userName +
//      ', age is ' +
//      userAge +
//      ' and the user has hobbies: ' +
//      userHasHobbies
//      );

// }

// // const add = (a,b) => a + b;
// //const addOne = a => a + 1; // hakkies is optioneel as daar net 1 input is

// const addRandom = () => 1 + 2;

// // console.log(add(1,2));
// // console.log(addOne(1));
// console.log(addRandom());
// console.log(summarizeUser(name, age, hasHobbies));

const person = {
  name: "Rainer",
  age: 28,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name, age }) => {
  console.log(name, age);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// const copiedPerson = {...person}
// console.log(copiedPerson);
// person.greet();
// console.log(person);

const hobbies = ["Coding", "Games", "Anime"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // };

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// // hobbies.push('VTubers');
// // console.log(hobbies);

// // const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1,2,3,4,5));

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
