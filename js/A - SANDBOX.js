"use strict"



function removeElem() {
    let anArray = [1, 2, 3, 4, 5];
    while(anArray.indexOf(2) !== -1) {
        anArray.splice(anArray.indexOf(2), 1)
    }
}
console.log(removeElem());