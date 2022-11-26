
let form = document.getElementById('form');
let divAdd = document.querySelector('#add');
let input = document.getElementById('text');


//submit the form
form.addEventListener('submit', tweet);

// remove tweet
divAdd.addEventListener('click', removeTweet);

function tweet(e) {
    e.preventDefault();
    //get value from input 
    let tweets = document.querySelector('#text').value;
   
    //create -li- element
    let newElement = document.createElement('li');
    newElement.textContent = tweets;
    divAdd.appendChild(newElement);

    //create -a element
    let newElement2 = document.createElement('a');
    newElement2.className = 'btn-outline-info';
    newElement2.href = '#';
    newElement2.textContent = 'X';
    newElement2.style.color = 'purple';
    newElement.appendChild(newElement2); 

    addTweetsIntolocalStorage(tweets);

    alert("Tweet Added!");

    form.reset();
    
}

function removeTweet(e) {
    if (e.target.classList.contains('btn-outline-info')) {
        e.target.parentElement.remove();
     }

     removeTweetLocalStorage( e.target.parentElement.textContent);
    
}


//adding tweet into Local Storage
function addTweetsIntolocalStorage(tweets){
    let names = getItemlocalStorage();

    names.push(tweets);

    localStorage.setItem('names', JSON.stringify(names));
}  

 function getItemlocalStorage() {

     let names;
     let localStorageContent = localStorage.getItem('names');

     if (localStorageContent === null) {
         names =[];
     }else{
        names = JSON.parse(localStorageContent);
     }
     
    return names; 
     
 }

function  removeTweetLocalStorage(tweets) {

    console.log(tweets);
    let names = getItemlocalStorage();

     let tweetDelete = tweets.substring(0,tweets.length -1 );
    

   
    names.forEach(function(element,index) {
        if (tweetDelete === element) {
            
            names.splice(index, 1);
        }
    });

    localStorage.setItem('names', JSON.stringify(names));


}






























/*
let btn = document.getElementById('btn');
let add = document.getElementById('add');
let text = document.getElementById('text');
let close = document.getElementById('close');


btn.addEventListener('click', saveTweet);

function saveTweet() {

    
    alert("Tweet added");
    add.innerHTML = "<ul><li>"  + text.value + "</ul></li>";
    close.innerHTML = '<button onclick="remove()" type="button" class="btn-close" aria-label="Close"></button>';

    
};

function remove() {
    add.remove();
    close.remove();
}

text.addEventListener('click', ()=>{
     text.value = "";
})


*/







