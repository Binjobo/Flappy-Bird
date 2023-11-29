/*----- constants -----*/


/*----- state variables -----*/
let xAxis = 0;
let yAxis = 0;
let started = false;

/*----- cached elements  -----*/
let gameScreen = document.querySelector("body");

const bird = document.querySelector("#movingBird");
const allClaws = document.querySelector("#allClawPairs");

const clawPair1 = document.querySelector("#pair1");

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
    if (parseInt(bird.style.top) <= -250) {
        return;
    } else if (e.keyCode === 87 || e.code === "Space") {
        yAxis -= 30;
        bird.style.top = yAxis + "px";
    }
}

function gravity() {
    function drop() {
        if (yAxis >= window.innerHeight - 340) { 
            clearInterval(dropSpeed); 
        } else {
            yAxis += 1;
            bird.style.top = yAxis + 'px';
        }
    }
    const dropSpeed = setInterval(drop, 3);    
}

//claws
function clawsAutoMoveLeft(callback) {
    function moveLeft() {
        if (checkAllCollisions()) {              
            clearInterval(shiftLeftSpeed);
        } else if (xAxis <= -4000) {
            clearInterval(shiftLeftSpeed);
            allClaws.style.left = 0;
            xAxis = 0;
            callback();
        } else {
            xAxis -= 5;
            allClaws.style.left = xAxis + 'px';
        }
    }
    const shiftLeftSpeed = setInterval(moveLeft, 15);
}

function repeatClawsRound(rounds) {
    let counter = 0;
    function callback() {
        counter++;
        if (counter < rounds) {
            clawsAutoMoveLeft(callback);
        }
    }
    clawsAutoMoveLeft(callback);     //referenced chatGPT examples
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
        bird.offsetTop >= 640 ||    
        checkCollision(bird, clawDownLong) ||
        checkCollision(bird, clawUpShort) ||
        checkCollision(bird, clawDownShort) ||
        checkCollision(bird, clawUpLong) ||
        checkCollision(bird, clawPair3) ||
        checkCollision(bird, clawPair4)
    ) {
        gameOverScreen.style.display = "block";
        console.log(bird.offsetTop);
        console.log(window.innerHeight);   
        return true;
    }
}

function scoreCount() {
    let scoreTimer;      //referenced chatGPT example
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
    if(!started) {
        started = true;
        startScreen.style.display = "none";
        gravity();
        repeatClawsRound(3); 
        setInterval(checkAllCollisions, 10);
        scoreCount();
    }
}

//restart game
function startOver() {
    if (started) {
        xAxis = 0;
        yAxis = 0;
        started = false;

        bird.style.top = yAxis + "px";
        allClaws.style.left = 0;
        gameOverScreen.style.display = "none";
        scores.innerText = 0;
    }
}



