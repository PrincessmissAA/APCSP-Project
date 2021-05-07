//Makes the cards and card values.
class card{
    constructor(suit, faceValue, value, cardImageName) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;
        this.cardImage = cardImageName;
        if(value > 10 ){
            this.blackJackValue = 10;
        }else{
            this.blackJackValue = value;
        }
        this.cardPlayed = 0;
    }

    getSuit(){
        return this.suit;
    };
    getFaceValue(){
        return this.faceValue;
    };
    getBlackJackValue(){
        return this.blackJackValue;
    };
    getValue(){
        return this.value;
    };
    getCardPlayed(){
        return this.cardPlayed;
    };
    getCardImage(){
        return this.cardImage;
    }

}

//Makes the deck.
class deck {
    constructor() {

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const faceValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        const cardImageValues = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']

        this.deckArray = [];
        var deckIndex = 0;
        var value = 1;
        var cardImageName = "";

        for(var i = 0; i < suits.length; i++){
            value = 1;
            for(var j = 0; j < faceValues.length; j++){
                cardImageName = cardImageValues[j] + "-" + suits[i].slice(0, -1) + ".jpg";
                this.deckArray.push(new card(suits[i], faceValues[j], value, cardImageName));
                value ++;
            }
        }
        return this.deckArray;
    }
}

