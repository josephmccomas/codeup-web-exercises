"use strict"

alert("Welcome to my website!");

var userInput = prompt("What is your favorite color?");
console.log(`The user entered: ${userInput}`);

alert(`${userInput} is my favorite color too!`);

/* You have rented some movies for your kids:
 The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?

- When the exercise asks you to use a number, instead use a prompt
to ask the user for that number.

- Use an alert to show the results of each problem.

- Finally, commit the changes to your git repository, and push to GitHub.
*/

var littleMermaid = Number(prompt(`Days The Little Mermaid will be rented`));
var brotherBear = Number(prompt(`Days Brother Bear will be rented`));
var hercules = Number(prompt(`Days Hercules will be rented`));
alert(`$ ${(littleMermaid + brotherBear + hercules) * 3} is the rental total`);