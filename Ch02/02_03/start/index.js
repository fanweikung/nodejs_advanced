const fs = require("fs");

const readStream = fs.createReadStream("../../powder-day.mp4");

readStream.on("data", (chunk) => {
  //   console.log("read little chunk\n", chunk);
  console.log("size:", chunk.length);
});
readStream.on("end", () => {
  console.log("read stream finished");
});
readStream.on("error", (error) => {
  console.log("an error has occured");
  console.error(error);
});

readStream.pause(); //non-flowing
process.stdin.on("data", (chunk) => {
  readStream.read();
});
