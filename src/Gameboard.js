import { Ship } from './Ship';

class Gameboard {
    constructor() {
        this.numberOfShipsSunk = 0;
        this.ships = [
            this.createShip("destroyer", 2),
            this.createShip("submarine", 3),
            this.createShip("cruiser", 3),
            this.createShip("battleship", 4),
            this.createShip("carrier", 5)
        ]
    }

    // Use ship class to create individual ships
    createShip(name, length) {
        return new Ship(name, length);
    }
}

export { Gameboard }