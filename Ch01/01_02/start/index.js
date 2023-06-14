// Resolving promises
var delay = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("The long wait has ended"), seconds * 1000);
  });

// function delay(seconds, callback) {
//   setTimeout(callback, seconds * 1000);
// }

delay(1).then(console.log);

// delay(1, () => {
//   console.log("one second");
// });

console.log("end first tick");
