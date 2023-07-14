import { initializeButtons } from "./gameButtons";
import { createBoard } from "./gameBoard";

(function () {

    initializeButtons();
    createBoard('yellow', 'player');
    createBoard('pink', 'computer');



}())



