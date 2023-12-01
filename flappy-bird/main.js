/*----- constants -----*/
const screenUpperBound = -250;
const screenLowerBound = window.innerHeight - 340;
const scrollLeftSpeed = 15;
const groundCollisionHeight = 640;

/*----- state variables -----*/
let xAxis = 0;
let yAxis = 0;
let started = false;

/*----- cached elements  -----*/
const gameScreen = document.querySelector("body");

const bird = document.querySelector("#movingBird");
const allClaws = document.querySelector("#allClawPairs");

const clawDownLong = document.querySelector("#clawDownLong");
const clawUpShort = document.querySelector("#clawUpShort");
const clawDownShort = document.querySelector("#clawDownShort");
const clawUpLong = document.querySelector("#clawUpLong");
const clawPair3 = document.querySelector("#pair3");
const clawPair4 = document.querySelector("#pair4");

const startScreen = document.querySelector("#start");
startScreen.style.display = "block";

const scores = document.querySelector("#scoreNumbers");

const gameOverScreen = document.querySelector("#gameOver");
gameOverScreen.style.display = "none";

const startOverButton = document.querySelector("#restart");

/*----- event listeners -----*/
gameScreen.addEventListener("click", gameStart);
gameScreen.addEventListener("keydown", gameStart);
gameScreen.addEventListener("keydown", moveUpKey);
startOverButton.addEventListener("click", startOver);

/*----- functions -----*/

//bird
function moveUpKey(e) {
  if (checkAllCollisions()) {
    return;
  } else if (parseInt(bird.style.top) <= screenUpperBound) {
    return;
  } else if (e.keyCode === 87 || e.code === "Space") {
    yAxis -= 30;
    bird.style.top = yAxis + "px";
  }
}

function gravity() {
  function drop() {
    if (yAxis >= screenLowerBound) {
      clearInterval(dropSpeed);
    } else {
      yAxis += 1;
      bird.style.top = yAxis + "px";
    }
  }
  const dropSpeed = setInterval(drop, 3);
}

//claws
function clawsAutoScrollLeft() {
  function scrollLeft() {
    if (checkAllCollisions()) {
      clearInterval(shiftLeftSpeed);
    } else if (xAxis <= -4000) {
      clearInterval(shiftLeftSpeed);
      allClaws.style.left = 0 + "px";
      xAxis = 0;
      shiftLeftSpeed = setInterval(scrollLeft, scrollLeftSpeed);
    } else {
      xAxis -= 5;
      allClaws.style.left = xAxis + "px";
    }
  }

  let shiftLeftSpeed = setInterval(scrollLeft, scrollLeftSpeed);
}

//collision
function checkCollision(bird, claws) {
  const birdSprite = bird.getBoundingClientRect();
  const clawsPNG = claws.getBoundingClientRect();

  if (
    birdSprite.left < clawsPNG.left + clawsPNG.width &&
    birdSprite.left + birdSprite.width > clawsPNG.left &&
    birdSprite.top < clawsPNG.top + clawsPNG.height &&
    birdSprite.top + birdSprite.height > clawsPNG.top
  ) {
    return true;
  }
}

function checkAllCollisions() {
  if (
    yAxis >= screenLowerBound ||
    checkCollision(bird, clawDownLong) ||
    checkCollision(bird, clawUpShort) ||
    checkCollision(bird, clawDownShort) ||
    checkCollision(bird, clawUpLong) ||
    checkCollision(bird, clawPair3) ||
    checkCollision(bird, clawPair4)
  ) {
    gameOverScreen.style.display = "block";
    return true;
  }
}

//score
function scoreCount() {
  let scoreTimer;
  clearInterval(scoreTimer);

  function countingScore() {
    if (checkAllCollisions()) {
      clearInterval(scoreTimer);
    } else {
      scores.innerText = parseInt(scores.innerText) + 1;
    }
  }
  scoreTimer = setInterval(countingScore, 1000);
}

//start game
function gameStart() {
  if (!started) {
    started = true;
    startScreen.style.display = "none";
    gravity();
    clawsAutoScrollLeft();
    setInterval(checkAllCollisions, 10);
    scoreCount();
  }
}

//restart game
function startOver() {
  xAxis = 0;
  yAxis = 0;
  started = false;
  bird.style.top = yAxis + "px";
  allClaws.style.left = 0;
  gameOverScreen.style.display = "none";
  scores.innerText = 0;
}
