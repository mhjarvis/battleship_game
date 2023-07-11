import { Ship } from './ship';
import { initializeGameButtons } from './gameButtons';
import { createBoard } from './shipPlacement';
import { GameBoard } from './gameBoard';

(function () {

    initializeGameButtons();
    createBoard();

    let test = new GameBoard();
    console.log(test)

}())