console.log("Up and running!");

// Arrays
//var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];

// Objects
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];

// Functions
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again");
    }
  };
};
var flipCard = function (cardID) {
  console.log("User flipped " + cards[cardID].rank);
  console.log(cards[cardID].suit + '\n' + cards[cardID].cardImage);
  cardsInPlay.push(cards[cardID].rank);
  checkForMatch();
};

// Scripts
flipCard(0);
flipCard(1);
