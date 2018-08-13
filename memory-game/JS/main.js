// alert("Up and running!");
console.log("Up and running!");

// Arrays
var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];

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
  console.log("User flipped " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);
  checkForMatch();
};

// Scripts
flipCard(0);
flipCard(1);
