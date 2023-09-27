import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

// Initialize Gameboard objects and populate board array
let player = new Player('Human Player')
let computer = new Player('Computer Player')
let playerBoard = new Gameboard
let computerBoard = new Gameboard



updateGameboardDisplay('#player-board', playerBoard)
updateGameboardDisplay('#computer-board', computerBoard)

// initialize ships - replace
playerBoard.placeShip('Carrier', 5, [55, 65, 75, 85, 95])
playerBoard.placeShip('BattleShip', 4, [12, 13, 14, 15])
playerBoard.placeShip('Destroyer', 3, [20, 30, 40])
playerBoard.placeShip('Submarine', 3, [57, 67, 77])
playerBoard.placeShip('Patrol Boat', 2, [98, 99])

computerBoard.placeShip('Carrier', 5, [55, 65, 75, 85, 95])
computerBoard.placeShip('BattleShip', 4, [12, 13, 14, 15])
computerBoard.placeShip('Destroyer', 3, [20, 30, 40])
computerBoard.placeShip('Submarine', 3, [67, 77, 87])
computerBoard.placeShip('Patrol Boat', 2, [91, 92])



updateGameboardDisplay('#player-board', playerBoard)
updateGameboardDisplay('#computer-board', computerBoard)

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
        } else if (playerBoard.board[i] === 'Carrier' ||
                   playerBoard.board[i] === 'BattleShip' ||
                   playerBoard.board[i] === 'Destroyer' ||
                   playerBoard.board[i] === 'Submarine' ||
                   playerBoard.board[i] === 'Patrol Boat') {
            div.classList.add('ship-color')
        }
        getBoard.append(div)
    }
}

function takeShot() {
    let board = playerBoard
    let test = true

    while (test) {      // test to make sure the shot is legal
        let loc = getRandomInt(0, 99)

        if (board.board[loc] === undefined || board.board[loc] === 'Cruiser') {     // needs to be Fixed
            board.receiveAttack(loc)
            return
        }
    }

    board.receiveAttack(loc)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// npx webpack --watch




