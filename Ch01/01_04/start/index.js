var fs = require("fs");
var { promisify } = require("util");

var writeFile = fs.writeFile(
  "callback.txt",
  "hello from callback writefile",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("file saved");
  }
);
