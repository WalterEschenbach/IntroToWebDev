// Gather elements from the DOM
let startBetForm = document.forms["startBetForm"]
let startBetInput = document.getElementById('startBetInput');
let startBetDisplay = document.getElementById('startBetDisplay');
let totalRollsDisplay = document.getElementById('totalRollsDisplay');
let highestAmountWonDisplay = document.getElementById('highestAmountWonDisplay');
let rollCountAtHighestDisplay = document.getElementById('rollCountAtHighestDisplay');
let resultsDisplay = document.getElementById('results');

// Declare variables to track high scores
let highestWon = 0;
let rollCountAtHighestWon = 0;

// Format number to currency
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
// 
function validate() {
      
    startBetForm.className = "needs-validation";
      
    //check the form's validity with the Constraint Validation API's checkValidity() function   
    if (!startBetForm.checkValidity()) {
        startBetForm.className = "was-validated";
        return false;
    }

    // Store the startbet entered by the user in a variable 
    var startBet = parseInt(startBetInput.value)

    // Call the rollDice function to initiate the game with the given startBet 
    let result = rollDice(startBet);

    // If the amount won is larger than high score, update high score (both rollsBeforeBroke and amountWon)
    // Else If the roll count at highest won is 0, set roll count to rollsBeforeBroke
    if(result.amountWon > highestWon){
        highestWon = result.amountWon;
        rollCountAtHighestWon = result.rollsBeforeBroke;
    }else if(rollCountAtHighestWon ===0 ){
        rollCountAtHighestWon = result.rollsBeforeBroke;
    }

    // Render the updated values
    startBetDisplay.innerHTML = `<h3>${formatter.format(startBet)}</h3>`
    totalRollsDisplay.innerHTML = `<h3>${result.rollsBeforeBroke}</h3>`
    highestAmountWonDisplay.innerHTML = `<h3>${formatter.format(highestWon+startBet)}</h3>`
    rollCountAtHighestDisplay.innerHTML = `<h3>${rollCountAtHighestWon}</h3>`
    
    resultsDisplay.style.display = "block";
    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

// Function that runs when the play button is clicked. 
// Input: amount of starting bet entered by user
// Output: an object with the amount won, and the number of rolls before going broke
function rollDice(startingBet){
    // Create an object to store our outputs
    let obj = {
        rollsBeforeBroke: 0,
        amountWon: 0,
    }
    let winnings = 0;
    // While we still have money, the game continues
    while(startingBet>0){
        var d1 = Math.floor((Math.random()*6)+1);
        var d2 = Math.floor((Math.random()*6)+1);

        if(d1+d2 === 7){
            startingBet += 4;
            winnings +=4;
        }else{
            startingBet--;
            winnings--;
        }
        
        if(obj.amountWon < winnings){
            obj.amountWon = winnings;
        } 
        obj.rollsBeforeBroke++;
    }

    return obj;
}
