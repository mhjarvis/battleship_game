import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { startInitialListeners } from "./eventListeners";

let playerboard, computerboard;

(function () {
    
    // initialize gameboard objects for player/computer
    playerboard = Gameboard()   
    playerboard.createBoard()
    computerboard = Gameboard()
    computerboard.createBoard()

    // build the boards and assign id/classes to individual cells
    buildBoardInDOM(playerboard, 'player-board')
    buildBoardInDOM(computerboard, 'computer-board')

    // Default event listeners
    startInitialListeners()

}())



console.log(playerboard.board.indexOf(33))
playerboard.assignMiss(33)
console.log(playerboard.board.indexOf(34))

console.log(playerboard)
console.log(computerboard)



// npx webpack --watch

function buildBoardInDOM(boardName, name) {
    
    const getGameboardContainer = document.querySelector('#' + name )
    
    for (let i = 0; i < boardName.board.length; i++) {
        const div = document.createElement('div')
        div.classList.add(name + '-cell')
        div.id = i
        getGameboardContainer.append(div)
    }
}

// Event Listener for cover

function resolvePlayerBoardAction(id) {
    console.log(id)
}

function resolveComputerBoardAction(id) {
    console.log(id)
}

function populatePlaceShipsBoard() {
    const getShipBoard = document.querySelector('#place-ships-board')

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('place-ships-board-cell')
        div.id = 'i' + i;
        getShipBoard.append(div);
    }
}


export { resolvePlayerBoardAction, resolveComputerBoardAction, populatePlaceShipsBoard }