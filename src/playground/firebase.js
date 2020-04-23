// import * as firebase from 'firebase';  // this gives dev build warning
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDryYjsgV3_k687jkDg9Lbor4Vr0zo85MI",
  authDomain: "expensify-56ebd.firebaseapp.com",
  databaseURL: "https://expensify-56ebd.firebaseio.com",
  projectId: "expensify-56ebd",
  storageBucket: "expensify-56ebd.appspot.com",
  messagingSenderId: "224347826444",
  appId: "1:224347826444:web:160ad053ac353b11628129"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
  
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val() 
//     })
//   });
//   console.log(expenses);

// }, (error) => {
//   console.log('Error fetching data', e);
// });

// database.ref('notes/-M5YkEGAfQXUIO6E2-yU').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//   console.log('Error fetching data', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout((onValueChange) => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Justin Spegele',
//   age: 35,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google"
//   },
//   location: {
//     city: 'New York City',
//     state: 'New York',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(e) {
//     console.log("Remove failed: " + e.message)
//   });