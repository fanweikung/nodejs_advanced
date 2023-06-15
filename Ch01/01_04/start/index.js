var { promisify } = require("util");

var delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} seconds it too long!`));
  } else {
    setTimeout(
      () => callback(null, `the ${seconds} second delay is over.`),
      seconds
    );
  }
};

// convert callback into promise
var promiseDelay = promisify(delay);
promiseDelay(4)
  .then(console.log)
  .catch((error) => console.log(`error: ${error.message}`));
