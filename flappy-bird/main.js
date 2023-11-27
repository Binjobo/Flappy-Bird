/*----- constants -----*/

/*----- state variables -----*/
let xAxis = 0;
let yAxis = 0;
let started = false;

/*----- cached elements  -----*/
const gameScreen = document.querySelector("body");
const bird = document.querySelector("#movingBird");
// const clawsPair1 = document.querySelector("#pair1");
const allClaws = document.querySelector("#allClawPairs");

/*----- event listeners -----*/
gameScreen.addEventListener("click", gameStart);
gameScreen.addEventListener("keydown", gameStart);

gameScreen.addEventListener("keydown", moveClawsLeftKey);
gameScreen.addEventListener("keydown", moveClawsRightKey);

gameScreen.addEventListener("keydown", moveUpKey);
// gameScreen.addEventListener("click", moveUpClick);
// gameScreen.addEventListener("keydown", moveDownKey);

/*----- functions -----*/

//bird 
function moveUpKey(e) {
    if (parseInt(bird.style.top) <= -290) {
        return;
    } else if (e.keyCode === 87 || e.code === "Space") {
        yAxis -= 30;
        bird.style.top = yAxis + "px";
    }
}

// function moveUpClick() {
//     if (bird.style.top <= (-300 + "px")) {
//         return;
//     } else {
//         yAxis -= 60;
//         bird.style.top = yAxis + "px";   /* inspired from StackOverflow */
//     }
// }

// function moveDownKey(e) {
//     if (parseInt(bird.style.top) >= window.innerHeight - 70) {
//         return;
//     } else if (e.keyCode === 83) {
//         yAxis += 10;
//         bird.style.top = yAxis + "px";
//     }
// }

function gravity() {
    function drop() {
        if (yAxis >= window.innerHeight - 360) {
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
    //test on claws reverse speed so can try on gravity
function moveClawsLeftKey(e) {
    if (e.keyCode === 37) {
        xAxis -= 20;
        // clawsPair1.style.left = xAxis + "px";
        allClaws.style.left = xAxis + "px";
    }
}

function moveClawsRightKey(e) {
    if (e.keyCode === 39) {
        xAxis += 20;
        // clawsPair1.style.left = xAxis + "px";
        allClaws.style.left = xAxis + "px";
    }
}
     
function clawsAutoMoveLeft(callback) {
    function moveLeft() {
        if (xAxis <= -4000) {
            clearInterval(shiftLeftSpeed);
            // clawsPair1.style.left = 0;
            allClaws.style.left = 0;
            xAxis = 0;
            callback(); // important
        } else {
            xAxis -= 5;
            // clawsPair1.style.left = xAxis + 'px';
            allClaws.style.left = xAxis + 'px';
            // console.log(xAxis);
            // console.log(window.innerWidth);
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
}
    //referenced from chatGPT examples


// function for collisionDie

//function for points

// function for renderGameover

// function for restartButton


//start game

function gameStart() {
    if(!started) {
        started = true;
        gravity();
        // clawsAutoMoveLeft();
        repeatClawsRound(3); // chatGPT
    }
}

