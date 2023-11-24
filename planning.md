## Goal 
Create a game of Flappy Bird using HTML, CSS and Javascript.


## Game Description 
A replicate of the classic mobile sensation "Flappy Bird"! The mechanics of this project would be largely the same as how you would expect a flappy bird game would run. 


## How the Game Works
The bird is floating in mid-air, and the background scene moves from right to left. At the click of mouse at anywhere on screen OR press of the spacebar, game starts. The BIRD would drop down on gravity by default. You have to click the screen or press the spacebar continuously at intervals to keep the bird afloat. Every click/spacebar moves the bird vertically up by the same height of the bird.

After a buffer time of about 8 seconds to get the user used to clicking the bird to keep it afloat, PIPES (column obstacles) will appear on screen from both top and bottom. The PIPES will come in pairs (meaning they will appear aligned in a vertial straight line), with a moderare amount of gaps (roughly 6 times the height of the BIRD) in between the PIPES to allow the bird to pass through.

For every PIPE the BIRD manages to pass through, 1 point is earned. The earned points will be added to the top right corner of the screen where a score-count is located.

When the BIRD hits the PIPE or drops to the FLOOR (the bottom of the screen), the BIRD dies. The screen will freeze, a score screen will appear, and a RESTART button will appear as well to be clicked to re-play the game.


## Minimum Viable Product
- The game is runnable with the background scene being able to zoom past at a reasonable speed
- Clicking the BIRD allows the BIRD to be lifted (by a certain margin)
- Optimize the running of the game on PC chrome broweser first; if there is time, will consider optimize it on browser on mobile


## Execution Steps
1. Create the background image
2. Create the html page and CSS 
3. Create the game logic (Pseudocode)


## Create the game objects
 - Try to create them in svg, if not png or jpg.
 - Use Canva to do it
 - Create a background image that has
    1.Blue Sky
    2.Clouds
    3.Cities
    4.Trees
    5.Solid Ground
 - Create moving objects (to be linked to JS functions) such as
    1.Bird (without animation first)
    2.Pipes (quantity to be determined later)
    3.Ground (a striped bar) - to show that it's moving
    4.Scoreboard


## Create the HTML and CSS page
 - Html
    1.Import in the background image
    2.Import in the moving objects
    3.In Html, give diff. IDs and Classes to each moving objects (i.e Bird would have an id of "bird", Pipes are given classed of pipes)
 - CSS
    1.Create an infinitely looping background image


## Create the game logic (Pseudocode)
Define variables
1. Const gameStart = false;

Define functions
1. Function startGame - add an event listener to the clicks of mouse OR press of Spacebar to start the game
2. Function birdMove - add an event listener to the clicks of mouse OR press of Spacebar to move the bird up
3. Function birdDrop - make the BIRD object drop by default (how exactly?)
4. Function playSound - play background music, activated when startGame = true
5. Function nextPipes - instantiate pipes after 10 sec for the fist set of pipes, and then every 3 sec (using setTimeOut)
6. Function endGame - implement collision dection upon Bird touch ground or pipes
7. Function render - render scores for each columns set passed

Start Game
1. On pressing spacebar OR click mouse, if game.start !== false, game.start = true to start the game

Play Game
1. 



