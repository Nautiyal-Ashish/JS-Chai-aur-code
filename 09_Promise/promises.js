// const prmoise1 = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls , cryptography ,network calls
//   setTimeout(function () {
//     console.log("Async Task is complete");
//     resolve(); //calling resolved
//   }, 1000);
// });

// prmoise1.then(function () {
//   console.log("Promise Consumed");
// }); //resolve connection

// -------------------
// Above same code in one code format

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// ------------------

// const prmoise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "ashish", email: "ashish@example.com" });
//   }, 1000);
// });

// prmoise3.then(function (user) {
//   console.log(user);
// });

// -------------------

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Ashish", password: 123 });
//     } else {
//       reject("ERROR : Something Went wrong");
//     }
//   }, 1000);
// });

// // promise4.then().catch();
// promise4
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("The Promise is either resolved or rejected");
//   });

//   ----------------------------

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: 123 });
//     } else {
//       reject("ERROR : JS Went wrong");
//     }
//   }, 1000);
// });

// // another way

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise5();

// ------------------------------
