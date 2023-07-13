import { initializeButtons } from "./old/gameButtons";

(function () {

    initializeButtons();

}())

















/*import { initializeGameButtons } from './gameButtons';
import { createBoard } from './shipPlacement';
import { GameBoard } from './gameBoard';
import { populateBoard } from './shipPlacement';
import { Ship } from './Ship';

(function () {

    initializeGameButtons();

}())

let player1 = new GameBoard();
player1.buildBoard('.player-board');
let cpu = new GameBoard();
cpu.buildBoard('.computer-board')

gameLoop();

function gameLoop() {

    // create 2x ship
    let playerSub = new Ship(2);
    playerSub.hit();
    playerSub.hit();
    console.log(playerSub)

    // highlight cell on mouseover
    let getBoxes = document.querySelectorAll('.box');

    for(let i = 0; i < getBoxes.length; i++) {
        getBoxes.item(i).addEventListener('mouseover', () => {
            getBoxes.item(i).classList.add('changeToGray');
            console.log(getBoxes.item(i))

        let id = getBoxes.item(i).id;
    
    })
        getBoxes.item(i).addEventListener('mouseout', () => {
            getBoxes.item(i).classList.remove('changeToGray');
        })
    }

    // hightlight 2 cells on mouseover








    console.log('gameLoop()')
}

*/