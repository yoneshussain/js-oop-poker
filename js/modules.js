class Card {
    constructor(color, name, value) {
        this.color = color;
        this.name = name;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.discarded = []
    }

    createCards() {
        let colors = ["Hjärter", "Ruter", "Klöver", "Spader"];
        let names = [
            "Ess",
            "Två",
            "Tre",
            "Fyra",
            "Fem",
            "Sex",
            "Sju",
            "Åtta",
            "Nio",
            "Tio",
            "Knekt",
            "Dam",
            "Kung",
        ];
        for (let i = 0; i < colors.length; i++) {
            for (let index = 0; index < names.length; index++) {
                let value = index + 1;
                if (names[index] === "Ess") {
                    value = 14;
                }
                const cards = new Card(colors[i], names[index], value);
                this.cards.push(cards);
            }
        }
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let randomNum = Math.random();
            let num = Math.floor(randomNum * (i + 1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[num];
            this.cards[num] = temp;
        }
    }

        restoreCards() {
            const restored = [ ...this.cards, ...this.discarded ]
            this.cards = restored
            this.discarded = []
    }
}

const card = new Deck();
card.createCards();
card.shuffleCards();

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    handCard(amount) {
        for (let i = 0; i < amount; i++) {
            const handedCard = card.cards.pop();
            this.hand.push(handedCard);
        }
    }

    handValue() {
        const totalValue = this.hand.reduce((sum, card) => {
            return sum + card.value;
        }, 0);
        return totalValue;
    }

    discardCards(amount) {
        const discardPile = card.discarded

        for (let i = 0; i < amount; i++) {
            const discardedCard = this.hand.pop();
            discardPile.push(discardedCard);
        }
    }

    discardAll() {
        this.discardCards(this.hand.length)
    }

}

const slim = new Player("Slim");
const luke = new Player("Luke");
slim.handCard(5);
luke.handCard(5);
console.log(slim.handValue());
console.log(luke.handValue());
slim.discardCards(2)
luke.discardCards(2)
slim.handCard(2);
luke.handCard(2);
console.log(slim.handValue());
console.log(luke.handValue());
console.log(slim.hand)
console.log(luke.hand)
slim.discardAll()
luke.discardAll()

card.restoreCards()

console.log(card.cards);
console.log(card.discarded)

card.shuffleCards();

console.log(card.cards);