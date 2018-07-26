/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("Javelin_rollButton").addEventListener("click", function(){attackRoll("Javelin", 1, 6)});

document.getElementById("Javelinroll_1").addEventListener("change", function(){calculateResult("Javelin", 1)});

function attackRoll(weapon, numRolls, faces){
    var idx;
    for(idx=1; idx <= numRolls; idx++){
        document.getElementById(weapon+"roll_"+idx).innerHTML = getRandomInt(1, faces);
    }
}

function calculateResult(weapon, numRolls){
    var idx;
    var sum = 0;
    for(idx=1; idx <= numRolls; idx++){
        var add = document.getElementById(weapon+"roll_"+idx).value;
        sum = sum + add;
    }

    mod = document.getElementById(weapon+"modifier").value;
    sum = sum + mod;
    document.getElementById(weapon+"sum").innerHTMl = sum;


}
