import { Gameboard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"
import { addListeners } from "./addListeners.js"
function gameLoop() {
    
    const playerBoard = new Gameboard('p');
    const computerBoard = new Gameboard('c');

    showBoardsInDOM('#player-board', playerBoard, 'p');
    showBoardsInDOM('#computer-board', computerBoard, 'c');

    //playerBoard.autoPlace();
    computerBoard.autoPlace();

    // Initialize event listeners for draggable events
    //addListeners();

    //console.log(JSON.stringify(computerBoard))
    //console.log(JSON.stringify(playerBoard))




}

// Create board and append to DOM element
function showBoardsInDOM(name, gBoard, prefix) {
    const board = document.querySelector(name);

    for (let i = 0; i < gBoard.board.length; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-cell');
        div.id = prefix + (i + 1);
        board.appendChild(div)
    }
}

export { gameLoop }