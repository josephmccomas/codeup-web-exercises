const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const list = users.filter(function (language) {
    if (language.languages.length > 2) {
        return true;
    } else {
        return false
    }
});
console.log(list);

// Use .map to create an array of strings where each element is a user's email address

const emailArr = users.map(function (address) {
    return address.email;
})
console.log(emailArr);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce(function (total, years) {
    return total + years.yearsOfExperience;
}, 0);
console.log(totalYears);
console.log(totalYears / users.length);

// Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((email, user) => (email.length > user.email.length) ? email : user.email, "")

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce(function (baseList, newList) {
    return baseList + newList.name + ", ";
}, "Your instructors are: ");
console.log(instructors);

//Use .reduce to get the unique list of languages from the list of users.

// const langList = users.reduce(function (mySet, user) {
//     user.languages.forEach(function ())
// })