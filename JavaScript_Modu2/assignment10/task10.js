const candnum = +prompt("Enter the number of candidates: ");
candidates = [];


for (let i = 0; i < candnum; i++){
    const candname = prompt("Enter the name of the candidates:" + (i + 1));
    candidates.push({name: candname, votes: 0});
}

const voternum = +prompt("Enter the number of voters: ");
for (let i = 0; i < voternum; i++){
    const voteName = prompt("Voter " + (i + 1) + ": Who do you vote for?");

    for (let candidate of candidates){
    if (candidate.name === voteName){
        candidate.votes++;
    }
}
}
candidates.sort((a, b) => b.votes - a.votes);
console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
console.log("Results:");
for (let candidate of candidates) {
    console.log(candidate.name + ": " + candidate.votes + " votes");
}