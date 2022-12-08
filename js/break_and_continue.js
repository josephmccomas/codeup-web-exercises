"use strict"

/** Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
 Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.*/

// Prompt for an odd number 1-50
    let userInput = prompt("Enter an odd number between 1 and 50")
// Use a loop w/break statement to continue prompting if input is invalid
    if (userInput % 2 === 0) {
        alert("Your number is not odd, try again");
        userInput = prompt("I said, enter an odd number between 1 and 50");
    } else if (userInput % 2 === 1) {
        console.log(userInput)
    }

// Use a loop & continue stmt to output odds 1-50

// Do not output the user's number




    // let userInput = prompt("Enter an odd number between 1 and 50");
    // // let result = {};
    // for (let i = 1; i < 50; i++) {
    //     if (Number.isInteger(userInput) === false)
    //         alert("That is not a number, try again");
    //     break;
    //
    //     if (userInput < 1 || userInput > 49)
    //         alert("Your number is not in range, try again");
    //     break;
    //
    //     if (userInput % 2 === 0)
    //         alert("Your number is not odd, try again");
    //     break;
    //
    //     if (i % 2 === 1) {
    //         // if (i === this.userInput) continue;
    //         result += `Here is an odd number: ${i}`;
    //         i++;
    //     }
    // }
    // console.log(result);