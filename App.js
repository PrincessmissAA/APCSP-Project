var d = new deck();
var dealInput = document.createElement("Input");
var deal = document.createElement("button");
var hitMe = document.createElement("button");
var stay = document.createElement("button");
var shuffle = document.createElement("button");
var nextRound = document.createElement("button");
var cardArray = d.getDeck();
//var cardBack = back.jpg;
/*
makeDealerTable();
Background Image

function makeDealerTable(){
    document.body.style.backgroundColor = "green";
}

//var cardArray = d.getcard();
*/
function cardButton(){
    var c = document.createElement("button");
    c.style.position = "absolute";
    c.style.backgroundImage = "url('cards/" + d[cardArray].cardImage + "')";
    c.style.width = 53;
    c.style.height = 71;
    console.log(c);
    //console.log("cards/" + d[0].cardImage);
    document.body.append(c);
}

cardButton();

function deal(f){
    var f = Number(dealInput.value);
    for(var i = 0; i < f; i++){
        cardArray.push.cardButton();

    }
}

//var d = new deck();
//console.log(d[0].cardImage);
