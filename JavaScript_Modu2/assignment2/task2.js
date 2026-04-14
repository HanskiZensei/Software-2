const parnum = +prompt("Enter the number of participants: ")
const parlist = [];


for (let i = 0; i < parnum; i++){
    const name= prompt("Enter participant name: ")
    parlist.push(name);
}

parlist.sort();
let list = "";

for (let i = 0; i < parlist.length; i++){
    list += "<li>" + parlist[i] + "</li>"
}


document.querySelector("#participantlist").innerHTML = "<ol>" + list + "</ol>";
