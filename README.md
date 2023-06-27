# battleship_game



TO DO:

HTML: 
- Create form for placing your pieces
    - button for rotating ship, text for which piece is being placed, heading for form
- Interactive text on main screen that updates whose move it is / hit / miss (maybe not needed). 
- Add footer with links to GitHub


CSS:
- Add coloring for page
- Images for ships? Perhaps not needed if keeping it simple. 
- Hit/miss animation

JavaScript:

Start Game
- Logic to start a new game; launches ship placement
- Logic to reset the board to a fresh start - launch ship placement
- Update game board with your placed ships (redraw array?). 

Classes
- Create gameboard (10 x 10 board) - store in array to keep track of hits/misses? 
    - computer and player
- class to create the five ships per user

Gameplay
- Wait for player to take turn
    - upon turn, determine hit/miss
    - update computer board with hit miss
    - get computer to take a turn
- Computer AI? 
    - Will need data structure to decide on moves
    - Moves can be random unless there is a hit
    - If there is a hit, computer should attempt to find additional hits until the ship is sunk
- Logic to show when a ship has been sunk
    - Computer AI should respond to this by going back to random targeting.
- Logic to check if all 5 ships have been sunk
- Logic to declare winner
