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
    name: 'Rainer',
    age: 28,
    greet () {
        console.log('Hi, I am ' + this.name)
    }
};

person.greet();
console.log(person);

const hobbies = ['Coding', 'Games', 'Anime'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// };

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));