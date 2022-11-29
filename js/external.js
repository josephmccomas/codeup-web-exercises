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

// const moviePrice = prompt("Enter the movie rental price");
// const littleMermaid = prompt("How many days will you rent The Little Mermaid?");
// const brotherBear = prompt("How many days will you rent Brother Bear?");
// const hercules = prompt("How many days will you rent Hercules?");
// function totalCost() {
//     alert(`The Little Mermaid will cost ${littleMermaid * moviePrice}`)
//     alert(`Brother Bear will cost ${brotherBear * moviePrice}`)
//     alert(`Hercules will cost ${ hercules * moviePrice}`)
// }
// totalCost();

/** Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
 they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
 How much will you receive in payment for this week? You worked 10 hours for Facebook, 6
 hours for Google and 4 hours for Amazon.*/

// const googlePay = prompt("Enter pay rate for Google");
// const amazonPay = prompt("Enter pay rate for Amazon");
// const facebookPay = prompt("Enter pay rate for Facebook");
// var googleHours = prompt("Enter hours Google hours worked");
// var amazonHours = prompt("Enter Amazon hours worked");
// var facebookHours = prompt("Enter Facebook hours worked");
// const googleTotal = (googleHours * googlePay);
// const amazonTotal = amazonHours * amazonPay;
// const facebookTotal = facebookHours * facebookPay;
// function totalPayments() {
//     alert(`Your pay from Google is $${googleHours * googlePay}`);
//     alert(`Your pay from Amazon is $${amazonHours * amazonPay}`);
//     alert(`Your pay from Facebook is $${facebookHours * facebookPay}`);
//     alert(`Your total duckets are $${googleTotal + amazonTotal + facebookTotal}`);
// }
// totalPayments();

/** A student can be enrolled in a class only if the class is not full and the class
 schedule does not conflict with her current schedule.*/

// var classFull = false;
// var scheduleOpen = true;
// var canEnroll = true;
