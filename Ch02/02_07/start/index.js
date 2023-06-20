const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream, mkdirSync } = require("fs");
const { PerformanceMeasure } = require("perf_hooks");

const readStream = createReadStream("../../powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4");

class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }
  _read() {}

  _final() {
    this.push(null);
  }
}

const throttle = new Throttle(10);
const report = new PassThrough();

var total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log("bytes: ", total);
});
readStream.pipe(throttle).pipe(report).pipe(writeStream);
