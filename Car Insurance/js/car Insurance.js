//varijables
let spinner = document.querySelector('#spinner');
let newElement = document.getElementById('newElement');

let form = document.getElementById('form');

let inputMake = document.querySelector('.form-select');
let inputYear = document.getElementById('years');

let inputRadio1 = document.querySelector('#flexRadioDefault1');
let inputRadio2 = document.querySelector('#flexRadioDefault2');

let make = document.querySelector('.form-select');
let year = document.getElementById('years');



//event listeners

document.addEventListener('DOMContentLoaded', loadedFunction);
form.addEventListener('submit', submitFunction);

//function

function loadedFunction() {
    for (let i = 2022; i >= 2000; i--) {

        let year = document.createElement('option');
        year.value = i;
        year.textContent = i;

        years.appendChild(year);
    }

    spinner.style.display = 'none';
}

function submitFunction(e) {
    e.preventDefault();

    validation();

}

function validation() {
    if (make.value === 'select' && year.value === 'choose') {
        make.style.borderColor = 'red';
        year.style.borderColor = 'red';
    }
    if (make.value === 'select') {
        make.style.borderColor = 'red';
    }
    if (year.value === 'choose') {
        year.style.borderColor = 'red';
    }
    else {
        let radioButton = document.querySelector('input[name="flexRadioDefault"]:checked').value;

        resultFunction(make, year, radioButton);

    }

}

function resultFunction(make, year, radioButton) {
    let price;

    let base = 2000;

    let makeValue = make.value;

    // American 15%, Asian 0,5%, European 35%
    if (makeValue === '1') {
        price = base * 1.15;
    }
    if (makeValue === '2') {
        price = base * 1.05;
    }
    if (makeValue === '3') {
        price = base * 1.35;
    }


    let yearValue = year.value;
    yearFunction(yearValue);

    //Each year the cost of the insurance is going to be 3% cheapear

    price = price - ((yearFunction(yearValue) * 3) * price) / 100;

    //check the radio button
    let result_price = radioButtonFunction(price, radioButton);

    completeResult(make, year, radioButton, result_price);


}
function yearFunction(yearValue) {
    return new Date().getFullYear() - yearValue;
}

function radioButtonFunction(price, radioButton) {
    /*
     Basic insurance is going to increase the value by 30%
    Complete insurance is going to increase the value by 50%
    */
    if (radioButton == 'basic') {
        price = price * 1.30;
    } else {
        price = price * 1.50;
    }
    return price;
}
function completeResult(make, year, radioButton, result_price) {

    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        let m_result;

    if (make.value == '1') {
        m_result = 'American';
    }
    if (make.value == '2') {
        m_result = 'Asian';
    }
    if (make.value == '3') {
        m_result = 'Europoean';
    }

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Make: ' +  m_result;
    newElement.appendChild(paragraph);


    let paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Year: ' +  year.value;
    newElement.appendChild(paragraph2);

    let paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Level: ' +  radioButton;
    newElement.appendChild(paragraph3);

    let paragraph4 = document.createElement('p');
    paragraph4.textContent = 'Total price: ' +  result_price;
    newElement.appendChild(paragraph4);
    }, 2000);


}
