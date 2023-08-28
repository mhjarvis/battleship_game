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
        this.ships = []
    }
    placeShip(name, length, coordinates) {
        let ship = new Ship(name, length, coordinates)
        
        // add ship name to this.board array
        for (let i = 0; i < coordinates.length; i++) {
            this.board[coordinates[i]] = ship.name
        }

        // add to ships array to track all ships
        this.ships.push(ship)

    }
    receiveAttack(coordinate) {
        let testLocation = this.board[coordinate]

        // test for empty space, add 'miss' if null
        if (testLocation === null) {
            this.board[coordinate] = 'miss'
            console.log('miss')
            return
        }
        // if there is a ship there, update hits and test for sunk
        if (testLocation != null) {
            let shipName = this.board[coordinate]
            this.board[coordinate] = 'hit'
            console.log(shipName)
            
            // get ship object from ships
            let getShip = this.ships.find((s) => s.name === shipName)

            // increase hit number
            getShip.hit()
            
            // test whether ship is sunk
            if (getShip.checkIsSunk()) {
                this.numberOfShipsSunk++
                console.log('Number of Ships Sunk: ' + this.numberOfShipsSunk)
            }


            return
        }
    }









    createBoard() {
        for (let i = 0; i < 100; i++) {
            this.board.push(null)
        }
    }
}

export { Gameboard }