import { Ship } from './Ship';

class Gameboard {
    constructor() {
        this.board = this.createBoard()
        this.numberOfShipsSunk = 0
        this.ships = [
            this.createShip("patrolboat", 2),
            this.createShip("submarine", 3),
            this.createShip("cruiser", 3),
            this.createShip("battleship", 4),
            this.createShip("carrier", 5)
        ]
    }
    createBoard() {                             // create array of 100 elements
        let arr = [];                           // that will track hits & misses
        for (let i = 0; i < 100; i++) {
            arr.push(undefined)
        }
        return arr;
    }
    createShip(name, length) {
        return new Ship(name, length)
    }
    receiveAttack(coordinate, id) {
        const value = this.board[coordinate]
        const grid = document.getElementById(id)

        if (value === undefined) {
            this.board[coordinate] = 'miss'     // update object
            grid.classList.add('miss')          // update color in DOM
        } else {
            this.board[coordinate] = 'hit'      // update object
            grid.classList.add('hit')           // update DOM color
            grid.classList.remove('ship-color') // remove default color
            for (let ship of this.ships) {      
                if (ship.name === value) {      // update object variables
                    ship.hit()                  // and check for sunk
                    ship.checkIfSunk()
                    if (ship.isSunk) this.increaseSunk()
                }
            }
        }
    }
    increaseSunk() {
        this.numberOfShipsSunk++
    }
    testAllSunk() {
        return this.numberOfShipsSunk === 5
    }
}

export { Gameboard }