var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    // reject the Promise if seconds is too long
    if (seconds > 3) {
      rejects(new Error(`delay is > ${seconds}`));
    }

    setTimeout(() => {
      resolves("the long delay has ended");
    }, seconds * 1000);
  });

delay(4)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error) => console.log(`error: ${error.message}`));

console.log("end first tick");
