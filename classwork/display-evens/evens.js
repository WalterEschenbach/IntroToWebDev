let evensForm = document.forms['evensForm'];

function validate(){
    let numList = "";
    evensForm.className = "needs-validation";
    
    if (!evensForm.checkValidity()) {
        evensForm.className = "was-validated";
        return false;
    }
    
    // Script runs on page load, so all variables need to be stored in our validate function; Otherwise, the values will not populate
    let startNum = parseInt(document.getElementById('startNum').value);
    let endNum = parseInt(document.getElementById('endNum').value);
    let step = parseInt(document.getElementById('step').value);
    
    let solutionContainer = document.getElementById('solutionContainer');
    let solutionTitle = document.getElementById('solutionTitle');
    let solution = document.getElementById('solution');

    for(let i=startNum; i <= endNum; i+=step){
        if(i%2===0){
            numList += `<h3 class="m-0">${i}<h3>`;
        }
    }

    solutionContainer.style.display = "block";
    solutionTitle.innerHTML = `Here are the even numbers between ${startNum} and ${endNum} by ${step}'s:`;
    solution.innerHTML = numList;

    return false;
}

function resetView(){



}