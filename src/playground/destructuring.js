/*
 * Object Destructuring
 */

// const person = {
//   name: 'Justin',
//   age: 35,
//   location: {
//     city: 'Islandia',
//     temp: 78
//   }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

/*
 * Array Destructuring
 */

// const address = ['436 Madison Avenue', 'New York City', 'New York', '10022'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = items;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);