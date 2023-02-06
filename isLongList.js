const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt('Enter an array: '));

while (array.length >= 10) {
    console.log("the array has 10 or more items");
    break;
    } if (array.length < 10) {
        console.log("the array has less than 10 items");
        }