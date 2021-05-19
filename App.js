var d = new deck();
var cardArray = d.getDeck();

var dealInput = document.createElement("Input");
var playerInput = document.createElement("Input");
var playerButton = document.createElement("button");
var deal = document.createElement("button");
var hitMe = document.createElement("button");
var stay = document.createElement("button");
var shuffle = document.createElement("button");
var nextRound = document.createElement("button");

var dealtHolderplayer = document.getElementById("playerone")
var dealtHolderdealer = document.getElementById("playertwo")

makeButtonElements();

function prepTable() {

    shuffleCards();
    while (dealtHolderplayer.firstChild) {
        dealtHolderplayer.removeChild(dealtHolderplayer.firstChild);
    }
    while (dealtHolderdealer.firstChild) {
        dealtHolderdealer.removeChild(dealtHolderdealer.firstChild);
    }

    var f = Number(dealInput.value);
    dealCards(f);
}

function dealCards(f) {
    if (f > 26) {
        f = 52;
    } else if (f < 1) {
        f = 0;
    } else {
        f = f * 2;
    }

    for (var i = 0; i < f; i++) {
        if (i % 2 == 0) {
            var b = cardArray[i].cardButton(cardArray[i]);
            b.style.position = "relative";
            dealtHolderplayer.append(b);
        } else {
            var b = cardArray[i].cardButton(cardArray[i]);
            b.style.position = "relative";
            dealtHolderdealer.append(b);
        }
    }
}

function shuffleCards() {
    for (var i = 0; i < cardArray.length; i++) {
        var firstCard = i;
        var secondCard = 0;
        firstCard = Math.floor(Math.random() * cardArray.length);
        secondCard = Math.floor(Math.random() * cardArray.length);
        if (typeof cardArray[firstCard] != 'undefined' | typeof cardArray[secondCard] != 'undefined') {
            swapCards(firstCard, secondCard);
        } else {
            console.log("undefined pre swap: " + firstCard + "--" + secondCard);
        }
        if (typeof cardArray[firstCard] == 'undefined' | typeof cardArray[secondCard] == 'undefined') {
            console.log("undefined post swap: " + firstCard + "--" + secondCard);
        }
    }
}


function swapCards(c1, c2) {
    var temp = cardArray[c1];
    cardArray[c1] = cardArray[c2];
    cardArray[c2] = temp;
}

function makeButtonElements() {
    dealInput.placeholder = "number of cards to deal";
    document.body.prepend(dealInput);

    deal.innerHTML = "deal";
    deal.style.margin = "3px";
    document.body.prepend(deal);
    deal.addEventListener("click", prepTable);

}
