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

// Variables
var score = 0;

// Functions
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      score++;
      scoreAdd();
      alert("You found a match!");
    } else {
      alert("Sorry, try again");
    }
  };
};
var flipCard = function () {
  var cardID = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardID].rank);
  console.log(cards[cardID].suit + '\n' + cards[cardID].cardImage);
  cardsInPlay.push(cards[cardID].rank);
  this.setAttribute('src', cards[cardID].cardImage);
  checkForMatch();
};
var createBoard = function() {
  for (var i = 0; i < cards.length; i ++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};

var resetBoard = function () {
  for (var i = 0; i < cards.length; i ++) {
    var cardElement = document.getElementsByTagName('img')[i];
    cardElement.setAttribute('src', 'images/back.png');
    cardsInPlay = [];
    checkForMatch();
  };
};

var resetClick = function() {
  var resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetBoard);
};

var scoreAdd = function() {
  var scoreElement = document.getElementById('score');
  scoreElement.innerHTML = score;
};

// Scripts
createBoard();
resetClick();
scoreAdd();
