import { initializeGameButtons } from './gameButtons';
import { createBoard } from './shipPlacement';
import { GameBoard } from './gameBoard';
import { populateBoard } from './shipPlacement';

(function () {

    initializeGameButtons();

}())

let player1 = new GameBoard();
player1.buildBoard('.player-board');
let cpu = new GameBoard();
cpu.buildBoard('.computer-board')

gameLoop();

function gameLoop() {











    
    console.log('gameLoop()')
}