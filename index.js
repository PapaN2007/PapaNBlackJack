
let cardOne = 0;
let cardTwo = 0;
let sum = 0;
let cards = [];
let hasBlackJack;
let isAlive;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame(){
    sum = 0;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent+= cards[i] + " ";
    }
    sumEl.textContent = "Sum: "
    for(let i = 0; i < cards.length; i++){
        sum += cards[i];
    }
    sumEl.textContent += sum;
    if(sum < 21){
        message = "Do you want to draw a new card? 🙂"
    } else if (sum == 21){
        hasBlackJack = true;
        message = "Wohoo! You've got Blackjack! 🥳"
    } else {
        isAlive = false;
        message = "You're out of the game! 😭"

    }
    console.log(message)
    messageEl.textContent = message;
}


function startGame(){
    isAlive = true;
    cards = [];
    cardOne = newCard();
    cardTwo = newCard();
    renderGame();
}

function newCard(){
    if(isAlive){
    let card = getRandomCard();
    sum += card;
    const add = cards.push(card);
    renderGame();
    }
}

function getRandomCard(){
    let num = Math.floor(Math.random() * 13 + 1);
    if(num > 9){
        return 10;
    } else if (num == 1){
        return 11;
    }
    return num;
}