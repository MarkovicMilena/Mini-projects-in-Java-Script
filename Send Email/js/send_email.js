//Variables

let btnSend = document.getElementById('send');
let btnReset = document.getElementById('reset');

let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

let form = document.getElementById('form');
let img = document.getElementById('img');

//Event Listeners

document.addEventListener('DOMContentLoaded', appInit);

email.addEventListener('blur', validate);
subject.addEventListener('blur', validate);
message.addEventListener('blur', validate);

form.addEventListener('submit', sentEmail);
btnReset.addEventListener('click', resetForm);

// Function

function appInit() {
    btnSend.disabled = true;
}

function validate() {
     let error;
    
    validateLenght(this);

    if (this.type == 'email') {
         validateEmail(this);
    }

    error = document.querySelectorAll('.error');

    if (email.value !== '' && subject.value !== '' && message.value !=='') {
        if (error.length === 0) {
            btnSend.disabled = false;
        }
    }
}


function validateLenght(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
         field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
         field.classList.add('error');
    }
}

function validateEmail(field) {
    if (field.value.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


function sentEmail(e) {
    e.preventDefault();
    
    img.style.display = 'block';
    setTimeout(() => {
        email.value = '';
        subject.value = '';
        message.value = '';

        img.style.display = 'none';
        btnSend.disabled = true;

    }, 5000);
}

function resetForm() {
     email.value = '';
     subject.value = '';
     message.value = '';
     btnSend.disabled = true;
    
}


