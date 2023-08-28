import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

let test = new Ship('terst', 5, [5, 15, 25, 35, 45])

console.log(test)

// npx webpack --watch

let playerBoard = new Gameboard
playerBoard.createBoard()

let computerBoard = new Gameboard
computerBoard.createBoard()

console.log(playerBoard)