const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt('Enter an array: '));

if (array.length >= 4) {
  console.log(array[3]);
} else {
  console.log(array[array.length - 1]);
}
