import { Ship } from './Ship';

class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.numberOfShipsSunk = 0;
        this.ships = [
            this.createShip("destroyer", 2),
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
        //console.log(arr)
        return arr;
    }
    // Use ship class to create individual ships
    createShip(name, length) {
        return new Ship(name, length);
    }
    placeShip(ship) {
        // TODO - place ships at specific coordinates, update as needed
    }
    receiveAttack(coordinate) {
        // TODO - determine hit/miss, send hit() function to ship and update where needed
    }
    testAllSunk() {
        return this.numberOfShipsSunk === 5;
    }



}

export { Gameboard }