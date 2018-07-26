/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function roll() {
//     document.getElementById("rollResult").innerHTML = getRandomInt(1,20);
// }
var numberOfDice = document.getElementById("numberOfDice").value;

document.getElementById("numberOfDice").addEventListener("change", function(){updateNumberOfDice()})

document.getElementById("rollButton").addEventListener("click", function(){roll(numberOfDice, 5);})

function roll(numRolls, numRows){
    var idx;
    for(idx=1; idx <= numRows; idx++){
        if(idx <= numRolls){
            document.getElementById("roll_"+idx).innerHTML = getRandomInt(1,20);
        }
        else{
            document.getElementById("roll_"+idx).innerHTML = 0;
        }
    }
}

function updateNumberOfDice(){
    var newNum = document.getElementById("numberOfDice").value;
    numberOfDice = newNum;
}
