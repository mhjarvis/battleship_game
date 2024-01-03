import { Ship } from './Ship';

class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.numberOfShipsSunk = 0;
        this.ships = [
            this.createShip("patrolboat", 2),
            this.createShip("submarine", 3),
            this.createShip("cruiser", 3),
            this.createShip("battleship", 4),
            this.createShip("carrier", 5)
        ]
    }
    // Create array to hold board contents
    createBoard() {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(undefined);
        }
        return arr;
    }
    // Use ship class to create individual ships
    createShip(name, length) {
        return new Ship(name, length);
    }
    placeShip(ship, index) {
        
        // TODO - place ships at specific coordinates, update as needed
    }
    receiveAttack(coordinate, id) {
        const value = this.board[coordinate]
        const grid = document.getElementById(id)

        if (value === undefined) {
            this.board[coordinate] = 'miss'
            grid.classList.add('miss')
            // missed, nothing else need happen
        } else {
            this.board[coordinate] = 'hit'
            grid.classList.add('hit')
            grid.classList.remove('ship-color')
            for (let ship of this.ships) {
                if (ship.name === value) {
                    ship.hit()
                    ship.checkIfSunk()

                    if (ship.isSunk === true) {
                        this.numberOfShipsSunk++
                    }
                }
            }
        }
    }

    testAllSunk() {
        return this.numberOfShipsSunk === 5;
    }
    getShipOrientation(ship) {
        console.log('nothing')
    }
    getShipSize(shipName) {
        const found = this.ships.find((shipName) => shipName === this.ships.name)
    }

}

export { Gameboard }