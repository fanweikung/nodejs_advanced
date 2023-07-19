let wait = 5;

function delay(wait, callback) {
  setTimeout(callback, wait * 1000);
}

delay(wait, () => {
  console.log(`${wait} seconds delay`);
});
