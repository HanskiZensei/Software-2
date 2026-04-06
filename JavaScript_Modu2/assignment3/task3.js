const doglist = [];


for (let i = 0; i < 6; i++){
    const dogname= prompt("Enter dog name: ")
    doglist.push(dogname);
}
doglist.sort();
doglist.reverse();
let list = "";

for (let i = 0; i < doglist.length; i++){
    list += "<li>" + doglist[i] + "</li>"
}

document.querySelector("#dognameslist").innerHTML = "<ul>" + list + "</ul>";