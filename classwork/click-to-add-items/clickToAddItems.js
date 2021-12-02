// validate
// Function's purpose: ensure form elements are valid
// Input: none
// Output: boolean, always false to prevent form submission

// resetView
// Function's purpose: hide results table and error messages (inputs are automatically cleared by the browser)
// Input: none
// Output: none

// These elements will be used in both functions.
var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

const validate = () => {
    numberFun.className = 'needs-validation';

    if(!numberFun.checkValidity()){
        numberFun.className = 'was-validated';
        return false;
    }

    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);

    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";
    submitButton.innerText = "Recalculate"

    return false;
};

function resetView(){
    numberFun.className='needs-validation';
    results.style.display = 'none';
    submitButton.innerText = 'Calculate';
    num1.focus();
}