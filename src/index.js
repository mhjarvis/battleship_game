import { Gameboard } from "./Gameboard";

// Initialize Gameboard objects and populate board array
let playerBoard = new Gameboard
let computerBoard = new Gameboard

console.log(playerBoard)
console.log(computerBoard)

updateGameboardDisplay('#player-board', playerBoard.board)
updateGameboardDisplay('#computer-board', computerBoard.board)

playerBoard.placeShip('Cruiser', 3, [55, 65, 75])

playerBoard.receiveAttack(34)
playerBoard.receiveAttack(55)
playerBoard.receiveAttack(56)
playerBoard.receiveAttack(45)
playerBoard.receiveAttack(54)
playerBoard.receiveAttack(65)
playerBoard.receiveAttack(75)
playerBoard.receiveAttack(85)
updateGameboardDisplay('#player-board', playerBoard.board)



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
