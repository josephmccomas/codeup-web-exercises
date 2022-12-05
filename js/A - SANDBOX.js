"use strict"

const pets = [[{name: 'Trooper', type: 'dog'}], [{name: 'shadow', type: 'dog'}], [{name: 'Lilly', type: 'dog'}]];


function list() {
    // let result = "";
    for (name in pets) {
        // result += pets[name];
        console.log(`${name}`);
    }
    // return result;
}
list(pets);
