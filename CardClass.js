class card{
    constructor(suit, faceValue, value) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;
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

}


class deck {
    constructor() {

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const faceValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        this.deckArray = [];
        var deckIndex = 0;
        var value = 1;

        for(var i = 0; i < suits.length; i++){
            value = 1;
            for(var j = 0; j < faceValues.length; j++){
                this.deckArray.push(new card(suits[i], faceValues[j], value));
                value ++;
            }
        }
    }
}

