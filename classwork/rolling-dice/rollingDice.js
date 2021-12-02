// rollDice
// Function's purpose: generate a random value between 1 and 6
// Input: nothing
// Output: a random number between 1 and 6



function rollDice(numSides){
    return Math.floor(Math.random()*numSides) +1;
}

let ansr = prompt('How many sides does your dice have?')
let numRoles = prompt('How many times will you roll the dice?')

for (var i = 0; i < numRoles; i++) {
    console.log(rollDice(ansr));
  }