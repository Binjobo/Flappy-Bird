/*----- constants -----*/


/*----- state variables -----*/
let xAxis = 0;
let yAxis = 0;
let started = false;
// let gameOver = false;

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

const gameOverScreen = document.querySelector("#gameOver");
gameOverScreen.style.display = "none";

const startOverButton = document.querySelector("#restart");

/*----- event listeners -----*/
gameScreen.addEventListener("click", gameStart);
gameScreen.addEventListener("keydown", gameStart);

gameScreen.addEventListener("keydown", moveClawsLeftKey);
gameScreen.addEventListener("keydown", moveClawsRightKey);

gameScreen.addEventListener("keydown", moveUpKey);

startOverButton.addEventListener("click", startOver);

/*----- functions -----*/

//bird 
let enableMoveUp = true;

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
    //referenced chatGPT examples
}


//claws
function moveClawsLeftKey(e) {
    if (e.keyCode === 37) {
        xAxis -= 20;
        allClaws.style.left = xAxis + "px";
    }
}

function moveClawsRightKey(e) {
    if (e.keyCode === 39) {
        xAxis += 20;
        allClaws.style.left = xAxis + "px";
    }
}
     
function clawsAutoMoveLeft(callback) {
    function moveLeft() {
        if (xAxis <= -4000) {
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
    clawsAutoMoveLeft(callback);
    //referenced chatGPT examples
}


//collision
function checkCollision1() {
    const birdRect = bird.getBoundingClientRect();
    const clawDownLongRect = clawDownLong.getBoundingClientRect();

    if (birdRect.left < clawDownLongRect.left + clawDownLongRect.width &&
        birdRect.left + birdRect.width > clawDownLongRect.left &&
        birdRect.top < clawDownLongRect.top + clawDownLongRect.height &&
        birdRect.top + birdRect.height > clawDownLongRect.top
    ) {
        // console.log("Collision with clawDownLong!");
        return true;
    } else {
        // console.log("No collision with clawDownLong!");
        return false;
    }
}

function checkCollision2() {
    const birdRect = bird.getBoundingClientRect();
    const clawUpShortRect = clawUpShort.getBoundingClientRect();

    if (birdRect.left < clawUpShortRect.left + clawUpShortRect.width &&
        birdRect.left + birdRect.width > clawUpShortRect.left &&
        birdRect.top < clawUpShortRect.top + clawUpShortRect.height &&
        birdRect.top + birdRect.height > clawUpShortRect.top
    ) {
        // console.log("Collision with clawUpShort!");
        return true;
    } else {
        // console.log("No collision with clawUpShort!");
        return false;
    }
}

function checkCollision3() {
    const birdRect = bird.getBoundingClientRect();
    const clawDownShortRect = clawDownShort.getBoundingClientRect();

    if (birdRect.left < clawDownShortRect.left + clawDownShortRect.width &&
        birdRect.left + birdRect.width > clawDownShortRect.left &&
        birdRect.top < clawDownShortRect.top + clawDownShortRect.height &&
        birdRect.top + birdRect.height > clawDownShortRect.top
    ) {
        // console.log("Collision with clawDownShort!");
        return true;
    } else {
        // console.log("No collision with clawDownShort!");
        return false;
    }
}

function checkCollision4() {
    const birdRect = bird.getBoundingClientRect();
    const clawUpLongRect = clawUpLong.getBoundingClientRect();

    if (birdRect.left < clawUpLongRect.left + clawUpLongRect.width &&
        birdRect.left + birdRect.width > clawUpLongRect.left &&
        birdRect.top < clawUpLongRect.top + clawUpLongRect.height &&
        birdRect.top + birdRect.height > clawUpLongRect.top
    ) {
        // console.log("Collision with clawUpLong!");
        return true;
    } else {
        // console.log("No collision with clawUpLong!");
        return false;
    }
}

function checkCollision5() {
    const birdRect = bird.getBoundingClientRect();
    const clawPair3Rect = clawPair3.getBoundingClientRect();

    if (birdRect.left < clawPair3Rect.left + clawPair3Rect.width &&
        birdRect.left + birdRect.width > clawPair3Rect.left &&
        birdRect.top < clawPair3Rect.top + clawPair3Rect.height &&
        birdRect.top + birdRect.height > clawPair3Rect.top
    ) {
        // console.log("Collision with pair3!");
        return true;
    } else {
        // console.log("No collision with pair3!");
        return false;
    }
}

function checkCollision6() {
    const birdRect = bird.getBoundingClientRect();
    const clawPair4Rect = clawPair4.getBoundingClientRect();

    if (birdRect.left < clawPair4Rect.left + clawPair4Rect.width &&
        birdRect.left + birdRect.width > clawPair4Rect.left &&
        birdRect.top < clawPair4Rect.top + clawPair4Rect.height &&
        birdRect.top + birdRect.height > clawPair4Rect.top
    ) {
        // console.log("Collision with pair4!");
        return true;
    } else {
        // console.log("No collision with pair4!");
        return false;
    }
}

function checkAllCollisions() {
    if (
        bird.offsetTop >= 640 ||    //when the bird touches the ground
        checkCollision1() === true ||
        checkCollision2() === true ||
        checkCollision3() === true ||
        checkCollision4() === true ||
        checkCollision5() === true ||
        checkCollision6() === true
    ) {
        // console.log("Oh yeahhhh");
        // document.querySelector("body").innerHTML = "Gameover!"
        gameOverScreen.style.display = "block";

        // startOver();


        function disableMoveUpKey(e) {
            if (e.keyCode === 87 || e.code === "Space") {
                yAxis += 30;
                bird.style.top = yAxis + "px";
            }
        }
    }
}



function clawsAutoMoveRight() {
    function moveRight() {
        if (xAxis <= -4000) {
            clearInterval(shiftRightSpeed);
            allClaws.style.left = 0;
            xAxis = 0;
        } else {
            xAxis += 5;
            allClaws.style.left = xAxis + 'px';
        }
    }
    const shiftRightSpeed = setInterval(moveRight, 15);
}






//function for points


//start game

function gameStart() {
    if(!started) {
        started = true;
        startScreen.style.display = "none";
        gravity();
        repeatClawsRound(3); 
        setInterval(checkAllCollisions, 10);
    }
}

// function disableMove() {
//     gameOver = true;
// }


function startOver() {
    started = false;
    // gameStart()
    console.log("Restart Game"); 
}