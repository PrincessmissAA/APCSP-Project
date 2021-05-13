var d = new deck();
var dealInput = document.createElement("Input");
var deal = document.createElement("button");
var hitMe = document.createElement("button");
var stay = document.createElement("button");
var shuffle = document.createElement("button");
var nextRound = document.createElement("button");
var cardArray = d.getDeck();
var dealtHolder = document.createElement("div");
document.body.append(dealtHolder);
dealtHolder.innerHTML = "";


makeButtonElements();
dealCards(dealInput.value);//put dealInput.value here

function dealCards(f){
    //console.log(f);
    var f = Number(dealInput.value);
    var dealCardArray = [];
    for(var i = 0; i < f; i++){
    
        dealCardArray.push(cardArray[i]);
        var b = dealCardArray[i].cardButton(dealCardArray[i]);
        b.style.position = "absolute";
        b.style.left = i*50;
        b.style.top = 50;
 
        dealtHolder.append(b);
    }
}

function makeButtonElements(){
    deal.innerHTML = "deal";
    deal.style.margin = "3px";
    document.body.append(deal);
    deal.addEventListener("click", dealCards);

    dealInput.placeholder = "enter dealSize";
    document.body.append(dealInput);
}
//var d = new deck();
//console.log(d[0].cardImage);
