"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 *
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */

/**Define a function named isGreaterThan that takes in two values and returns a true if the first argument is greater than the second argument otherwise it should return false. If either argument is not a number, return false*/

const num1 = 400;
const num2 = 300;

function isGreaterThan() {
    if ((isNaN(num1)) || (isNaN(num2))) {
        return false;
    } else if (num1 < num2) {
        return true;
    }
    return false;
}
isGreaterThan(num1, num2);

/** Define a function named isLessThan that takes in two values and returns a true if the first argument is less than the second argument otherwise it should return false. If either argument is not a number, return false*/

function isLessThan() {
    if ((isNaN(num1)) || (isNaN(num2))) {
        return false;
    } else if (num2 < num1) {
        return true;
    }
    return false;
}
isLessThan(num1, num2);

/** Define a function named isEqualNumber that takes in two values and returns a true if the first argument is equal to the second argument, otherwise it should return false. If either argument is not a number return false*/



/** Define a function named isEqual that takes in two values and returns a true if the first argument has the same value and type as the second argument, otherwise it should return false*/




/** Define a function named isNot that accepts a boolean argument and returns the opposite value of the argument. It should return false if the argument is null or not a boolean*/



/** Define a function named calcAbs that accepts a number argument and returns the absolute value of the argument. It should return O (zero) if the arguments is null or not a number.*/




/** Define a function named calcCube that accepts a number argument and returns the cubed value of the argument. It should return O (zero) if the arguments is null or not a number.*/



/** Define a function named isTypeMatch that accepts two arguments and returns true if the types of the arguments match. It should return false if either arguments is null.*/



/** Define a function named findLongestString that accepts two string arguments and returns the string with the greatest length. If only one argument is a string, return that argument. If neither arguments are strings, return and empty string*/



/** Define a function named isFactor that accepts two number arguments and returns true if the first argument is a factor of the second argument. It should return false if either argument is null or not a number. Also return false if the first argument is 0 (zero)*/



/** */