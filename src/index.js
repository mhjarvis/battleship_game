import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

// Initialize Gameboard objects and populate board array
let playerBoard = new Gameboard
let computerBoard = new Gameboard

updateGameboardDisplay('#player-board', playerBoard.board)
updateGameboardDisplay('#computer-board', computerBoard.board)

playerBoard.placeShip('Cruiser', 3, [55, 65, 75])


console.log(playerBoard.board)


function updateGameboardDisplay(boardNameInDOM, playerBoard) {
    let getBoard = document.querySelector(boardNameInDOM)
    getBoard.innerHTML = ''

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('board-cell')
        div.id = i

        if (playerBoard[i] === 'hit') {
            div.classList.add('red')
        } else if (playerBoard[i] === 'miss') {
            div.classList.add('blue')
        }
        getBoard.append(div)
    }
}

// npx webpack --watch




