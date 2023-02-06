const prompt = require('prompt-sync')({sigint: true});

let array = prompt('Enter an array: ');
console.log(array[array.length - 1]);
