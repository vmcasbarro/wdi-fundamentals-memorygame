console.log("Up and running!");

// Arrays
var mountainsInPlay = [];

// Objects
var mountains = [
  {
    peak: "washington",
    mountainImage: "images/washington.png"
  },
  {
    peak: "franconia",
    mountainImage: "images/franconia.png"
  },
  {
    peak: "washington",
    mountainImage: "images/washington.png"
  },
  {
    peak: "franconia",
    mountainImage: "images/franconia.png"
  },
];

// Variables
var score = 0;

// Functions
var checkForMatch = function() {
  if (mountainsInPlay.length === 2) {
    if (mountainsInPlay[0] === mountainsInPlay[1]) {
      score++;
      scoreAdd();
      alert("You found a match!");
    } else {
      alert("Sorry, try again");
    }
  };
};
var flipCard = function () {
  var mountainID = this.getAttribute('data-id');
  console.log("User flipped " + mountains[mountainID].peak);
  console.log(mountains[mountainID].mountainImage);
  mountainsInPlay.push(mountains[mountainID].peak);
  this.setAttribute('src', mountains[mountainID].mountainImage);
  checkForMatch();
};

var createBoard = function() {
  for (var i = 0; i < mountains.length; i ++) {
    var mountainElement = document.createElement('img');
    mountainElement.setAttribute('src', 'images/mountain_back.png');
    mountainElement.setAttribute('data-id', i);
    mountainElement.setAttribute('title', mountains[i].peak);
    mountainElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(mountainElement);
  };
};

var resetBoard = function () {
  for (var i = 0; i < mountains.length; i ++) {
    var mountainElement = document.getElementsByTagName('img')[i];
    mountainElement.setAttribute('src', 'images/mountain_back.png');
    mountainsInPlay = [];
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
