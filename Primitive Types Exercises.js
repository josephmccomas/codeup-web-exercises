// Create a variable that holds a boolean value for each of the following conditions:


function loginInfo() {

// the password must be at least 5 characters

    if (password.length < 5) {
        return false;
    }

// the password must not include the username

    if (password === username) {
        return false;
    }

    // the username must be no more than 20 characters

    if (username.length < 20) {
        return false;
    }

    // neither the username or password can start or end with whitespace

    if ((username[0] == " ") || (password[0] == " ")) {
        return false;
    }
}
loginInfo() {
    var username = 'codeup';
    var password = 'notastrongpassword';
}
// ++++++++++++++

