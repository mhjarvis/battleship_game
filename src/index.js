import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

let playerboard, computerBoard;

(function () {
    playerboard = Gameboard()   
    playerboard.createBoard()
    computerBoard = Gameboard()
    computerBoard.createBoard()
}())


console.log(playerboard)
console.log(computerBoard)



// npx webpack --watch