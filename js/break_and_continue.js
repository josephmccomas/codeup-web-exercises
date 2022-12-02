"use strict"

function oddNumEntry() {
    let userInput = prompt("Enter an odd number between 1 and 50");
    let minimumNumber = 1;
    let maximumNumber = 49;
    let randomNumber = Math.floor(Math.random() * (maximumNumber * minimumNumber +1) + minimumNumber);
    for () {

        if (isNaN(userInput)) {
            alert("Your number is not odd, try again");
            continue;
        }
        if (+userInput < 1 || +userInput > 49) {
            alert("Your number is not in range, try again");
            continue;
        }
        if (+userInput % 2 == 0) {
            alert("Your number is not odd, try again");
            continue;
        }
    }
}