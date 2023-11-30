# Game - Flappy Bird 2.0

## Game Description 
A personal rendition of the classic mobile sensation "Flappy Bird"! The mechanics of this project would be largely the same as how you would expect a flappy bird game would run. Except that instead of pipes, now it's CLAWS!

## Technologies used
- HTML
- CSS
- JavaScript
- Git & GitHub

## Initial Game Blueprint
![image info](./flappy-bird/screenshots/Game%20Layout.png)

<br>

## Minimum Viable Product (what I set out to achieve minimally)
- The game is runnable with the obstacle game objects being able to scroll from right to left at a reasonable speed
- There is gravity that pulls the bird down continuously
- Tapping on Spacebar or W key allows the bird to be lifted by a certain height to "stay afloat"

<br>

## Getting Started (Execution Steps)
1. Settle the game art and game objects
2. Create and edit the html and CSS file
3. Create and edit the Javascript file

## 1. Settle the game art and game objects
- Import a free flappy bird sprite (https://opengameart.org/content/free-game-asset-grumpy-flappy-bird-sprite-sheets)
- Used DALL-E to generate the art, and used Canva to modify the generated images.
- Create a background image that has
    - Sky
    - Clouds
    - Cities
- Create moving objects
    - Claws (the equivalent of Pipe obstacles)

## 2. Create and edit the html and CSS file
- HTML
    - Import in the background image
    - Import in the moving objects (bird and claws)
    - Group the objects in div tags and gave them different IDs and Classes
- CSS
    - For general coloring and positioning purpose only (the animation of the claws is done in Javascript instead)

## 3. Create and edit the Javascript file
- Game Architecture
    - used the Model-View-Controller(MVC) approach
    - this is the general code compartmentalization for how the game is run
        1. /*----- constants -----*/
            - certain speed and height variables
        2. /*----- state variables -----*/
            - x position 
            - y position
        3. /*----- cached elements  -----*/
            - create constants through document.querySelector the DOM objects
        4. /*----- event listeners -----*/
            - listens to click or keydown
        5. /*----- functions -----*/
            - functions for bird
            - for claws
            - for collision detection
            - for score count
            - for start game
            - for restart game

<br>

## Some screenshots of the game
**Game Start Screen**
![image info](./flappy-bird/screenshots/GameStart%20Screen.png)

**Game End Screen**
![image info](./flappy-bird/screenshots/GameOver%20Screen.png)

You may also try the game out at https://flappy-bird-bobby.vercel.app/ ~

<br>

## Key Learnings
1. Through the project, I have become more familiar of the MVC game architecture and start to appreciate how it makes code look much cleaner and organised.

2. When encoutering errors and bugs, I have learnt to isolate the problem by commenting out the unnecessary parts and narrow down to the specific line or lines. I will analyse what purpose this line is trying to achieve, and then break it down to find out where it could have gone wrong syntactically or logically.

3. Used setTimeout or setInterval for making asychronous events. Have a better understanding of how asychronous events work.

<br>

## Reference Material
Some of the reference materials/websites/tools I have used in making this game:
1. Stackoverflow (https://stackoverflow.com/questions/59510107/javascript-move-object-by-button-by-x-px)
2. Mdn Web Docs (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
3. Youtube (https://www.youtube.com/watch?v=_MyPLZSGS3s)
4. ChatGPT 

<br>

## Future Improvements
If there is more time I would hope to improve on or add in the following features:
- Make the claws appear within the game screen, instead of having to park it to right of the game screen
- Make the movement of the bird moving up less choppy and more smooth
- Make the score system to count score by each claws past, instead of by number of seconds that the bird stays afloat before collision
- Make the claws appear in random frequency and random length





