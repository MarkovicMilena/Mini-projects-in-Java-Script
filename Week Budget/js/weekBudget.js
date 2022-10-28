//varijable
let question;
let spanBudget = document.getElementById('budget');
let spanLeft = document.getElementById('left');
let form = document.getElementById('form');
let text = document.getElementById('exampleInput');
let amount = document.getElementById('exampleInputAmount');

let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');

let ul = document.getElementById('ul');


//event listener
document.addEventListener('DOMContentLoaded', loadedFunction);
form.addEventListener('submit', submitFunction);


// function
// loadedFunction
function loadedFunction() {
    question = prompt("What is your budget for this week?");
    if (question === null || question ==='' || question == 0 ) {
        window.location.reload();
    }else{
    
         spanBudget.innerHTML = question;
         spanLeft.innerHTML = question;

    }
}

function submitFunction(e) {
    e.preventDefault();

    validation();
}

function validation() {
    if (text.value =='' && amount.value =='') {
        span1.innerHTML = '* required';
        span1.style.color = 'red';
        span2.innerHTML = '* required';
        span2.style.color = 'red';
    }
    if (text.value =='' && amount.value !=='') {
        span1.innerHTML = '* required';
        span1.style.color = 'red';
        span2.innerHTML= '';
    }
    if (text.value !=='' && amount.value =='') {
        span1.innerHTML = ''
        span2.innerHTML = '* required';
        span2.style.color = 'red';
    }
    if (text.value !=='' && amount.value !=='') {
        span1.innerHTML = '';
        span1.innerHTML = '';

        let newE = document.createElement('li');
        ul.appendChild(newE);
        newE.textContent = text.value;

        if (spanLeft.textContent > 0) {
            spanLeft.textContent = spanLeft.textContent - amount.value;
        }else{
            spanLeft.textContent = 'No money';
        }
       

    }

}



