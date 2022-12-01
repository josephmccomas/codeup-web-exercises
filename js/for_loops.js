"use strict"

// Create a function named showMultiplicationTable that accepts
// a number and console.logs the multiplication table for that
// number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(input) {
    var i = 1;
    while (i <= 10) {
        console.log(`${input} * ${i} = ${input * i}`);
        i++;
    }
}
showMultiplicationTable(7)

// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console
// whether each number is odd or even.

var num = Math.floor(Math.random() * (200 - 20 + 1) + 20);
function randomOddOrEven(input) {
    var result;
    for (var i = 1; i <= 10; i++) {
        result = num * i;
        if (result % 2 == 0) {
            console.log(`${result} is even`);
        } else {
            console.log(`${result} is odd`);
        }
    }
}
randomOddOrEven(7);

// Create a for loop that uses console.log to create the output shown below.

function generatePyramid() {
    var totalNumberofRows = 9;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}
generatePyramid();

// Create a for loop that uses console.log to create the output shown below.

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}