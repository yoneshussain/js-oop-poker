class Card {
    constructor(color, name, value) {
        this.color = color
        this.name = name
        this.value = value
    }
}

class Deck {
    constructor() {
        this.cards = []
    }

    createCards() {
        let colors = ["Hjärter", "Ruter", "Klöver", "Spader"]
        let names = ["Ess", "Två", "Tre", "Fyra", "Fem", "Sex", "Sju", "Åtta", "Nio", "Tio", "Knekt", "Dam", "Kung"]
        for (let i = 0; i < colors.length; i++) {
            for (let index = 0; index < names.length; index++) {
                let value = index + 1
                if (names[index] === "Ess") { value = 14 }
                const cards = new Card(colors[i], names[index], value)
                this.cards.push(cards)
            }
        }
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let randomNum = Math.random()
            let num = Math.floor(randomNum * (i + 1))
            let temp = this.cards[i]
            this.cards[i] = this.cards[num]
            this.cards[num] = temp
        }
        console.log(this.cards)
    }
}
const card = new Deck()
card.createCards()
card.shuffleCards()