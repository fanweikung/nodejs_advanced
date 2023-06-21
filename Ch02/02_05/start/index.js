const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("../../powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4", {
  highWaterMark: 168888,
});

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  if (!result) {
    readStream.pause();
    console.log("backpressure");
  }
});

readStream.on("error", (error) => {
  console.log("an error occurred", error.message);
});

readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("drain", () => {
  readStream.resume();
  console.log("drained");
});

writeStream.on("close", () => {
  process.stdout.write("file copied\n");
});
