import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

let test = new Ship('terst', 5, [5, 15, 25, 35, 45])

console.log(test)

// npx webpack --watch

//test initialization of both boards
let playerBoard = new Gameboard
playerBoard.createBoard()

let computerBoard = new Gameboard
computerBoard.createBoard()

console.log(playerBoard)

// test palceShip function
playerBoard.placeShip('Cruiser', 5, [4, 14, 24, 34, 44])
console.log(playerBoard)

playerBoard.receiveAttack(4)
playerBoard.receiveAttack(5)
playerBoard.receiveAttack(6)
playerBoard.receiveAttack(13)
playerBoard.receiveAttack(14)
playerBoard.receiveAttack(15)
playerBoard.receiveAttack(24)
playerBoard.receiveAttack(34)
playerBoard.receiveAttack(44)

console.log(playerBoard)



updateGameboardDisplay('#player-board', playerBoard.board)

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