import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

// Initialize Gameboard objects and populate board array
let playerBoard = new Gameboard
let computerBoard = new Gameboard

updateGameboardDisplay('#player-board', playerBoard)
updateGameboardDisplay('#computer-board', computerBoard)

playerBoard.placeShip('Cruiser', 3, [55, 65, 75])

let count = 0

for (let i = 0; i < 20; i++) {
    takeShot()
    count++
}

console.log(count)









updateGameboardDisplay('#player-board', playerBoard)

function updateGameboardDisplay(boardNameInDOM, playerBoard) {
    let getBoard = document.querySelector(boardNameInDOM)
    getBoard.innerHTML = ''

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('board-cell')
        div.id = i

        if (playerBoard.board[i] === 'hit') {
            div.classList.add('red')
        } else if (playerBoard.board[i] === 'miss') {
            div.classList.add('blue')
        } else if (playerBoard.board[i] === 'Cruiser') {
            div.classList.add('ship-color')
        }
        getBoard.append(div)
    }
}

function takeShot() {
    let board = playerBoard
    let loc = getRandomInt(0, 99)

    board.receiveAttack(loc)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// npx webpack --watch




