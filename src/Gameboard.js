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
        this.board = this.createBoard()     // holds cells, hits, misses, ships
        this.numberOfShipsSunk = 0                          // use to check for endgame
        this.ships = []                                     // hold ship objects as they are created / placed 
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

        let shipName = this.board[coordinate]

        if (this.board[coordinate] === undefined) {
            this.board[coordinate] = 'miss'
            return 'miss'
        } else if (this.board[coordinate] === 'Cruiser') {
            this.board[coordinate] = 'hit'
            let s = this.ships.find((x) => x.name == shipName)
            s.hit()

            if (s.checkIsSunk()) {
                this.numberOfShipsSunk++
                console.log('Number of Ships Sunk: ' + this.numberOfShipsSunk)
            }
            return 'hit'
        } else {
            console.log('Error in: receiveAttack(coordinate)')
        }
    }

    // Get number of sunk ships
    getSunkShipCount() {
        return this.numberOfShipsSunk
    }

    // create indidual cells on game setup
    createBoard() {
        let temp = []
        for (let i = 0; i < 100; i++) {
            temp.push(undefined)
        }
        return temp
    }
}

export { Gameboard }