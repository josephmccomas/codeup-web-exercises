"use strict"

/** For-each loop
 *
 */

var fruits = ["peach", "apple", "pear"];

fruits.forEach(function(fruits) {
    console.log(fruits);
});

// or
console.log("------------------------");
function printFruit(fruits) {
    console.log(fruits);
}

fruits.forEach(printFruit);

/** For-in loops
 *
 */

console.log("------------------------");
let i = 1;
for (const fruit of fruits) {
    console.log(i + ". " + fruit);
    i++;
}