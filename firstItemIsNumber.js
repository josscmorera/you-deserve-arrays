const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt('Enter an array: '));

while (!isNaN(array[0])) {
    console.log("the first item is a number");
    break;
} if (isNaN(array[0])) {
    console.log("the first item is not a number");
}