import { Gameboard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"
import { addListeners } from "./addListeners.js"
function gameLoop() {
    
    // create both board objects
    const playerBoard = new Gameboard('p');
    const computerBoard = new Gameboard('c');

    // show player boards as grid elements; add ids, etc.
    showBoardsInDOM('#player-board', playerBoard, 'p');
    showBoardsInDOM('#computer-board', computerBoard, 'c');

    // randomly place player ship elements
    playerBoard.randomPlace();

    //playerBoard.autoPlace();
    //computerBoard.autoPlace();

    addListeners();
    // Initialize event listeners for draggable events


    console.log(JSON.stringify(playerBoard))
    console.log(JSON.stringify(computerBoard))



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