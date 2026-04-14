function rolldice(){
    return Math.floor(Math.random() * 6) + 1;
}


let list = "";
let currentroll = 0;


while (currentroll !== 6) {
    currentroll = rolldice();
    list += "<li>" + currentroll + "</li>";
}


document.querySelector("#dicerolls").innerHTML = "<ul>" + list + "</ul>";