// Create a variable that holds a boolean value for each of the following conditions:

//
//
function login() {
    let username = 'codeup';
    let password = 'notastrongpassword';
// the password must be at least 5 characters
    if (password.length < 5) {
        return false;
    }
// the password must not include the username
    if (password.includes(username)) {
        return false;
    }
    // the username must be no more than 20 characters
    if (username.length > 20) {
        return false;
    }
    // neither the username or password can start or end with whitespace
    if ((username(0) == " ") || (password(0) == " ")) {
        return false;
    }
    console.log(login);
}

// ++++++++++++++

let username = 'codeup';
let password = 'notastrongpassword';
// the password must be at least 5 characters

// the password must not include the username

// the username must be no more than 20 characters

// neither the username or password can start or end with whitespace

