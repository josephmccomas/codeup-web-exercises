"use strict"

/** Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
 Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.*/

function oddNumber() {
    let userInput = prompt("Enter an odd number between 1 and 50");
    if (userInput)
}
oddNumber();

// function oddNumEntry() {
//     let userInput = prompt("Enter an odd number between 1 and 50");
//     for (let i = 0; i < 50; i++) {
//         let result = {};
//         if (i % 2 === 1) {
//             if (i = userInput) {
//                 continue;
//             }         if (Number.isSafeInteger(userInput) !== true) {
//                 alert("Your number is not a number, try again");
//                 break;
//             }
//             if (+userInput < 1 || +userInput > 49) {
//                 alert("Your number is not in range, try again");
//                 break;
//             }
//             if (+userInput % 2 == 0) {
//                 alert("Your number is not odd, try again");
//                 break;
//             }
//         }
//             result += i;
//         }
//         return result;
// }
// oddNumEntry();
// console.log(result);