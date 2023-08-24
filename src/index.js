import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { startInitialListeners } from "./eventListeners";
import { dragDropSequence } from "./dragDropSequence";
import { startGameLoop } from "./GameLoop";

(function () {
    
    startGameLoop()

    // build the boards and assign id/classes to individual cells


    // Default event listeners
    startInitialListeners()


}())




// npx webpack --watch



function resolvePlayerBoardAction(id) {
    console.log(id)
}

function resolveComputerBoardAction(id) {
    console.log(id)
}

// Function to display place-ship board
function populatePlaceShipsBoard() {
    const getShipBoard = document.querySelector('#place-ships-board')

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')

        // add identifiers
        div.classList.add('place-ships-board-cell')
        div.id = 'i' + i;

        getShipBoard.append(div);
    }
}


















export { resolvePlayerBoardAction, resolveComputerBoardAction, populatePlaceShipsBoard }