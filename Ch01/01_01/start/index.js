// function hideString(str, done) {
//   process.nextTick(() => {
//     // now done is called asynchronously in the next tick, a true callback
//     done(str.replace(/[a-zA-Z]/g, "X"));
//   });
// }

// hideString("Hello World", (hidden) => {
//   console.log(hidden);
// });

// console.log("End");
let time = 5;

function delay(time, callback) {
  setTimeout(callback, time * 1000);
}

delay(time, () => {
  console.log(`${time} seconds delay`);
});
