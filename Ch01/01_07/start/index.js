var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

Promise.all([
  writeFile("Readme.md", "Hello World"),
  writeFile("Readme.txt", "Hello World"),
  writeFile("Readme.json", '{ "Hello": "World" }'),
  delay(2), // finish writeFile before unlink
  unlink("Readme.md"),
  unlink("Readme.txt"),
  unlink("Readme.json"),
])
  .then(() => readdir(__dirname))
  .then(console.log);
