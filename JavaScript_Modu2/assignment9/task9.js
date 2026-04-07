const numbers = [1, 2, 3, 4, 5, 6];


function even(){
    let evens = [];
    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] % 2 === 0){
            evens.push(numbers[i]);
        }
    return evens;
}

const result = even();
console.log(result, numbers)
document.querySelector("#numarray").innerHTML = "Your arrays are printed inside the console."