var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);

writeFile("promisify.txt", "Hello")
  .then(() => console.log("file saved"))
  .catch((error) => console.log(`error: ${error.messge}`));
