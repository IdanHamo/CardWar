const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

class Deck {
  constructor(Suits, Values) {
    this.Suits = Suits;
    this.Values = Values;
  }

  creationOfTheDeck() {
    let deck = [];

    for (const suit of this.Suits) {
      let cardsValue = 2;
      for (const value of this.Values) {
        deck.push({
          fullCard: value + " " + suit,
          cardsValue: cardsValue++,
          shape: suit,
        });
      }
    }
    console.log(deck);
    return deck;
  }
}

let newDeck = new Deck(SUITS, VALUES);
const cardWarDeck = newDeck.creationOfTheDeck();

class Cards {
  constructor(deck) {
    this.deck = deck;
    this.userDeck = [];
    this.computerDeck = [];
    this.randomUserCards = [];
    this.randomComputerCards = [];
  }

  deal(deck = this.deck) {
    while (deck.length) {
      const card = deck.shift();

      if (deck.length % 2 === 0) {
        this.computerDeck.push(card);
      } else {
        this.userDeck.push(card);
      }
    }
  }

  userRandomDeck(userDeck = this.userDeck) {
    while (userDeck.length > 0) {
      let rand = Math.floor(Math.random() * userDeck.length);
      let card = userDeck.splice(rand, 1)[0];
      this.randomUserCards.push(card);
    }

    return this.randomUserCards;
  }

  computerRandomDeck(computerDeck = this.computerDeck) {
    while (computerDeck.length) {
      let rand = Math.floor(Math.random() * computerDeck.length);
      let card = computerDeck.splice(rand, 1)[0];
      this.randomComputerCards.push(card);
    }
    return this.randomComputerCards;
  }
}

const cards = new Cards(cardWarDeck);
cards.deal();
cards.userRandomDeck();
cards.computerRandomDeck();
