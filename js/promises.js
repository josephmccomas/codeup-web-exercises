

    // Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    const user = "josephmccomas";

    function lastCommit() {
        return fetch("https://api.github.com/users/" + user + "/events/public", {headers: {'Authorization': GITHUB_API_KEY}})
            .then(function (result) {
                return result.json();
            })
            .then(function (data){
                data.filter(function (){
                    return data.length === "Push Event";
                }[0].created_at)
            })
    lastCommit(data){
        let mostRecentCommit = data.created_at;
        console.log(mostRecentCommit);
    };


// function wait(ms){
//     return new Promise(function (resolve, reject){
//         setTimeout(function (){
//             resolve("Howdy, I waited " + ms + " ms.");
//         }, ms);
//     })
// }
//     wait(1000).then((msg) => console.log(msg));
//     wait(3000).then((msg) => console.log(msg));
