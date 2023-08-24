import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { startInitialListeners } from "./eventListeners";
import { dragDropSequence } from "./dragDropSequence";

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

    dragDropSequence()

    populatePlaceShipsBoard(); // REMOVE AFTER FINALIZATION

}())




// npx webpack --watch

// Function to display player/computer boards
function buildBoardInDOM(boardName, name) {
    
    const getGameboardContainer = document.querySelector('#' + name )
    
    for (let i = 0; i < boardName.board.length; i++) {
        const div = document.createElement('div')
        div.classList.add(name + '-cell')
        div.id = i
        getGameboardContainer.append(div)
    }
}


function resolvePlayerBoardAction(id) {
    console.log(id)
}

function resolveComputerBoardAction(id) {
    console.log(id)
}

// Function to display place-ship board
function populatePlaceShipsBoard() {
    const getShipBoard = document.querySelector('#place-ships-board')
    console.log('test')
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')

        // add identifiers
        div.classList.add('place-ships-board-cell')
        div.id = 'i' + i;

        // add additional event listeners for drag & drop methods
        div.addEventListener('dragenter', dragEnter)
        div.addEventListener('dragover', dragOver)
        div.addEventListener('dragleave', dragLeave)
        div.addEventListener('drop', drop)

        getShipBoard.append(div);
    }
}

function dragEnter(e) {
    e.preventDefault()
    e.target.classList.add('drag-over')
}
function dragOver(e) {
    e.preventDefault()
    e.target.classList.add('drag-over')
}
function dragLeave(e) {
    e.target.classList.remove('drag-over')
}
function drop(e) {
    e.target.classList.remove('drag-over')
    
    console.log('droped')
}


















export { resolvePlayerBoardAction, resolveComputerBoardAction, populatePlaceShipsBoard }