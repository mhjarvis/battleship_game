/**************************************************************
Create Gameboard factory.
    1. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
    2. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
    3. Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    4. Gameboards should keep track of missed attacks so they can display them properly.
    5. Gameboards should be able to report whether or not all of their ships have been sunk.
***************************************************************/

import { Ship } from "./Ship";

class Gameboard {
    constructor() {
        this.board = []
        this.numberOfShipsSunk = 0
    }
    placeShip(name, length, coordinates) {
        let ship = new Ship(name, length)
        // NEEDS UPDATING
        


    }
    receiveAttack(coordinate) {
        let hitLocation = this.board[coordinate]
    }









    createBoard() {
        for (let i = 0; i < 100; i++) {
            this.board.push(null)
        }
    }
}

export { Gameboard }