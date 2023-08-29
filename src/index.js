import { Gameboard } from "./Gameboard";

// Initialize Gameboard objects and populate board array
let playerBoard = new Gameboard
let computerBoard = new Gameboard

console.log(playerBoard)
console.log(computerBoard)

//updateGameboardDisplay('#player-board', playerBoard.board)
//updateGameboardDisplay('#computer-board', computerBoard.board)

function placeUserShips() {

}

function updateGameboardDisplay(boardNameInDOM, playerBoard) {
    let getBoard = document.querySelector(boardNameInDOM)

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
