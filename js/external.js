"use strict"
// console.log("Hello from external Javascript");

/**Use the alert function to show a message that says 'Welcome to my Website!'.*/

// alert("Welcome to my website!!");

/**Use a prompt to ask for the user's favorite color. Use the user's response to alert
a message that says that the color entered is your favorite color too.
For example, if the user enters "blue", your code should alert a message that says:
"Great, blue is my favorite color too!"*/

// var color = prompt("What is your favorite color?");
// alert(`${color} is my favorite color too!`)

/**Complete exercise 3 from the previous lesson, but write your code in the external.js
file instead of in the console.

    When the exercise asks you to use a number, instead use a prompt to ask the user
        for that number.
    Use an alert to show the results of each problem.
    Finally, commit the changes to your git repository, and push to GitHub. */

/**You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to
like it). If price for a movie per day is $3, how much will you have to pay?*/

const moviePrice = 3;
const littleMermaid = 3;
const brotherBear = 5;
const hercules = 1;
function totalCost() {
    return ((littleMermaid + brotherBear + hercules) * moviePrice);
}
totalCost();