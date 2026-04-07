strings = ["Johnny", "DeeDee", "Joey", "Marky"]


function concat(strings){
    let result = "";
    for (let i = 0; i < strings.length; i++)
    result += strings[i];
    return result;
}


document.querySelector("#concatstring").innerHTML = concat(strings);