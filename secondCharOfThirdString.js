// 6. `secondCharOfThirdString.js`: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead


const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt('Enter an array: '));

if (typeof array[2] === 'string') {
  console.log(array[2][1]);
} else {
    console.log("Error: the third item is not a string");
}
