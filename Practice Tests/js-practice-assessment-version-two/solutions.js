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

function isGreaterThan(param1, param2) {
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    return param1 > param2;
}


/** Define a function named isLessThan that takes in two values and returns a true if the first argument is less than the second argument otherwise it should return false. If either argument is not a number, return false*/

function isLessThan(param1, param2) {
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    return param1 < param2;
}

/** Define a function named isEqualNumber that takes in two values and returns a true if the first argument is equal to the second argument, otherwise it should return false. If either argument is not a number return false*/

function isEqualNumber(param1, param2) {
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    return param1 === param2;
}

/** Define a function named isEqual that takes in two values and returns a true if the first argument has the same value and type as the second argument, otherwise it should return false*/

function isEqual(param1, param2) {
    if (param1 === param2) {
        return true;
    }
    return false;
}

/** Define a function named isNot that accepts a boolean argument and returns the opposite value of the argument. It should return false if the argument is null or not a boolean*/

function isNot(param) {
    if (param === null) return false;
    if (param === "!boolean") return false;
    return !param;
}

/** Define a function named calcAbs that accepts a number argument and returns the absolute value of the argument. It should return O (zero) if the arguments is null or not a number.*/


function calcAbs(param) {
    if (param === null || isNaN(param)) return 0;
    return Math.abs(param);
}

/** Define a function named calcCube that accepts a number argument and returns the cubed value of the argument. It should return O (zero) if the arguments is null or not a number.*/

function calcCube(param) {
    if (param === null || isNaN(param)) return 0;
    return Math.pow(param, 3);
}

/** Define a function named isTypeMatch that accepts two arguments and returns true if the types of the arguments match. It should return false if either arguments is null.*/

function isTypeMatch(param1, param2) {
    if (param1 === null || param2 === null) return false;
    if (typeof param1 === typeof param2) {
        return true;
    }
    return false;
}

/** Define a function named findLongestString that accepts two string arguments and returns the string with the greatest length. If only one argument is a string, return that argument. If neither arguments are strings, return and empty string*/

function findLongestString(param1, param2) {
    if (param1 === null || typeof param1 !== "string") {
        if (param1 === null || typeof param2 !== "string") return "";
        return param2;
    }
    if (param2 === null || typeof param2 !== "string") {
        if (param1 === null || typeof param1 !== "string") return "";
        return param1;
    }
    if (typeof param1 !== "string" && typeof param2 !== "string") return "";
    if (param1.length > param2.length) return param1;
    return param2;
}

/** Define a function named isFactor that accepts two number arguments and returns true if the first argument is a factor of the second argument. It should return false if either argument is null or not a number. Also return false if the first argument is 0 (zero)*/

function isFactor(param1, param2) {
    if (param1 === null || param2 === null) return false;
    if (isNaN(param1) || isNaN(param2)) return false;
    if (param1 === 0) return false;
    return isFactor(param1, param2);
}

/** */