var fs = require("fs");
var beep = () => process.stdout.write("\x07");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);

var delay = (seconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });

const doStuffSequentially = () =>
  Promise.resolve()
    .then(() => console.log("starting"))
    .then(() => delay(1)) //invoking a promise inside then method
    .then(() => "waiting")
    .then(console.log)
    .then(() => delay(2))
    .then(() => "wait some more")
    .then(console.log)
    .then(() => writeFile("file.txt", "Sample File..."))
    .then(beep())
    .then(() => "file.txt created")
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink("file.txt"))
    .then(beep())
    .then(() => "file.txt removed")
    .then(console.log)
    .then(() => console.log("sequential execution complete"))
    .catch(console.error);

doStuffSequentially();
