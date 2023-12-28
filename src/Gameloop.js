import { Gameboard } from "./Gameboard";
import { initiateListeners } from "./Listeners";


let playerBoard, computerBoard;

function gameLoop() {

    // Create gameboards
    playerBoard = new Gameboard
    computerBoard = new Gameboard
    createBoardInDOM(playerBoard, 'player-area', 'p', '')
    createBoardInDOM(computerBoard, 'computer-area', 'c', 'c')

    // Add listeners as needed
    initiateListeners()

    placePlayerShips()

}

/**
 * 
 * This function creates and adds a gameboard to the DOM. It first retrieves the preset
 * container element. Then creates a new div, adds a class name and id, then appends
 * everything to either the player container, or the computer container.
 */

function createBoardInDOM(player, tag, classPrefix, idPrefix) {
    for(let i = 0; i < player.board.length; i++ ){ 
        const DOMLocation = document.querySelector(`#${tag}`)   // get container element
        const div = document.createElement('div')
        div.className = classPrefix + 'grid'
        div.id = idPrefix + i
        div.innerText = i
        DOMLocation.append(div)
    }
}

function reset() {
    playerBoard = new Gameboard
    computerBoard = new Gameboard
    createBoardInDOM(playerBoard, 'player-area', 'p', '')
    createBoardInDOM(computerBoard, 'computer-area', 'c', 'c')
    initiateListeners()
}

function placePlayerShips() {
    for (let i = 0; i < playerBoard.ships.length; i++) {
        let random = getRandomGrid()
        console.log(getRandomGrid())
    }
}

function getRandomGrid() {
    return Math.floor(Math.random() * 100)
}
/**
 * This function will 
 */

export { gameLoop, placePlayerShips }