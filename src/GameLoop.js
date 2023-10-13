import { Gameboard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"

function gameLoop() {
    
    const playerBoard = new Gameboard();
    const computerBoard = new Gameboard();

    showBoardsInDOM('#player-board', playerBoard);
    showBoardsInDOM('#computer-board', computerBoard);


    console.log(`Creating computerBoard and playerBoard:`)
    console.log(JSON.stringify(computerBoard))
    console.log(JSON.stringify(playerBoard))










    // added div elements, without classes or ids or content;



}

function showBoardsInDOM(name, gBoard) {
    const board = document.querySelector(name);

    for (let i = 0; i < gBoard.board.length; i++) {
        const div = document.createElement('div');
        board.appendChild(div)
    }
}

export { gameLoop }