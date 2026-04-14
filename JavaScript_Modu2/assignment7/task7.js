const sidenum = +prompt("How many sides does the dice have? ");

function rolldice(sides){
    return Math.floor(Math.random() * sides) + 1;
}


let list = "";
let currentroll = 0;


while (currentroll !== sidenum) {
    currentroll = rolldice(sidenum);
    list += "<li>" + currentroll + "</li>";
}


document.querySelector("#dicesides").innerHTML = "<ul>" + list + "</ul>";