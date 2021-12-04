let contactForm = document.forms['contactForm'];
let contactFormContainer = document.getElementById('contactFormContainer')
let thankYou = document.getElementById('thankYou');
console.log('thankYou: ', thankYou)

// Form validation 
function validate(){
    
    contactForm.classList.add('needs-validation');
    
    if(!contactForm.checkValidity()){
        contactForm.classList.replace('needs-validation', 'was-validated')
        return false;
    }

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    console.log(name);
    console.log(email);
    console.log(phone);


    console.log('form:', contactFormContainer.style.display);

    contactFormContainer.style.setProperty('display', 'none', 'important');
    thankYou.style.display = 'block';

    console.log('form:', contactFormContainer);

    return false;
}

function resetView(){
    console.log('reset fired')
    contactForm.classList.add('needs-validation');
    contactFormContainer.style.setProperty('display', 'block');
    thankYou.style.setProperty('display', 'none', 'important')
}