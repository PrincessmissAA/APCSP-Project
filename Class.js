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

        const suits = {'Hearts', 'Spades', 'Clubs', 'Diamonds'}
        const faceValues = {'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'}

        this.deckArray = [];
        var deckIndex = 0;

        for(let suit in suits){
            value = 1;
            for(let faceValue in faceValues){
                this.deckArray.push = new Card(suit, faceValue, Value);
                value ++;
            }
        }
    }
}