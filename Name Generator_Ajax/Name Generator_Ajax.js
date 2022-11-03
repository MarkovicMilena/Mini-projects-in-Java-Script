// varijables
let form = document.getElementById('form');


// event listeners

form.addEventListener('submit', submitedFunction);

//function

function submitedFunction(e) {
    e.preventDefault();

    let selectCountry = document.getElementById('select1').value;
    let selectGender = document.getElementById('select2').value;
    let inputNumber = document.getElementById('inputNumber').value;

    let url = 'https://uinames.com/api/?';

    if (selectCountry !== '') {
        url += `region=${selectCountry}&`;
    }
    if (selectGender !== '') {
        url += `gender=${selectGender}&`;
    }
    if (inputNumber !== '') {
        url += `amount=${inputNumber}&`;
    }


    //Ajax call
    const xhttp = new XMLHttpRequest();


    xhttp.open('GET', url, true);

    // Execute the functions
    xhttp.onload = function () {

        if (this.status === 200 && this.readyState === 4) {

            console.log(JSON.parse(this.responseText));
        }
    }

}