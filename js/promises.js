

    // Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    const user = "josephmccomas";

function lastCommit() {
    return fetch("https://api.github.com/users/" + user + "/events/public", {headers: {'Authorization': GITHUB_API_KEY}})
    .then(function (result) {
        return result.json();
    })
}
lastCommit().then(function (result){
    console.log(result);
    let mostRecentCommit = result[0];
    console.log(mostRecentCommit);
    document.getElementById("commit").innerHTML = mostRecentCommit.toString();
});
