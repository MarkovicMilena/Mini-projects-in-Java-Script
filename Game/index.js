//VARIJABLES

let roundNumber = document.querySelector('.round');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let winner = document.querySelector('.winner');


let dices1 = document.getElementById('dices1');
let dices2 = document.getElementById('dices2');


//define
let dicesImages = [null, "\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

let user1 = {
    name: prompt("Unesite ime  prvog igraca"),
    currentDice: null,
    score: 0,
    dices: []
}

let user2 = {
    name: prompt("Unesite ime drugog igraca"),
    currentDice: null,
    score: 0,
    dices: []
}

player1.innerHTML += user1.name;
player2.innerHTML += user2.name;

let maxRound = prompt('Broj rundi:')

let round = 0;

function startGame() {
    
        round++;
        user1.currentDice = getDice();
        user1.dices[user1.dices.length] = dicesImages[user1.currentDice];

        user2.currentDice = getDice();
        user2.dices[user2.dices.length] = dicesImages[user2.currentDice];
        user1.score += user1.currentDice;
        user2.score += user2.currentDice;


       let result = `*** ROUND ${round} *******`;

        roundNumber.innerHTML = result ;

        dice1.innerHTML = ` <br> ${user1.currentDice} `;
        dice2.innerHTML = ` <br> ${user2.currentDice} `;

        dices1.innerHTML =  `Dices: ${user1.dices}`;
        dices2.innerHTML = `Dices: ${user2.dices}`;


    if (round < maxRound) {
        setTimeout(() => {
            startGame()
        }, 2000);
    } else {
        showWiner();
    }

}
function getDice() {
    return Math.floor(Math.random() * 6) + 1  //6
}

startGame();

function showWiner() {
    if (user1.score > user2.score) {
      winner.innerHTML=  `*** Winner : ${user1.name} ***`;
    } else if (user1.score < user2.score) {
        winner.innerHTML=  `*** Winner : ${user2.name} ***`
    } else {
        winner.innerHTML= ` *** No Winner ***`;
    }
}