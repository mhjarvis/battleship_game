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
        this.board = this.createBoard()             // holds cells, hits, misses, ships
        this.numberOfShipsSunk = 0                  // use to check for endgame
        this.ships = []                             // hold ship objects as they are created / placed 
    }

    // create new Ship object, update gameboard with ship name in cells
    placeShip(name, length, coordinates) {
        let ship = new Ship(name, length, coordinates)
        
        for (let i = 0; i < coordinates.length; i++) {          // add ship name to this.board
            this.board[coordinates[i]] = ship.name
        }
        this.ships.push(ship)                                   // add to ships array to track all ships
    }

    // Resolve attacks - miss, hit, update ships, update board
    receiveAttack(coordinate) {
        let index = this.board[coordinate]

        // do nothing if there has already been a  shot (miss / hit)
        if (index === 'miss' || index === 'hit') {
            return;                           
        }
        // test for empty space, add 'miss' if null
        if (index === null) {
            this.board[coordinate] = 'miss'         // update this.board with 'miss' in index
            console.log('miss')
        }
        // if there is a ship there, update hits and test for sunk
        if (index != null && index != 'miss' && index != 'hit') {
            let shipName = this.board[coordinate]           // hold ship name value from this.board
            this.board[coordinate] = 'hit'                  // update this.board with 'hit' text

            // get ship object from ships THIS NEEDS TO BE OBJECTS FOR EASIER REFERENCE
            let getShip = this.ships.find((s) => s.name === shipName)

            // increase hit number
            getShip.hit()
            
            // test whether ship is sunk
            if (getShip.checkIsSunk()) {
                this.numberOfShipsSunk++
                console.log('Number of Ships Sunk: ' + this.numberOfShipsSunk)      // REMOVE AFTER TESTING
            }
            return
        }
    }

    // create indidual cells on game setup
    createBoard() {
        let temp = []
        for (let i = 0; i < 100; i++) {
            temp.push(null)
        }
        return temp
    }
}

export { Gameboard }