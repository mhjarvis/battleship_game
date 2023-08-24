/**************************************************************
Create Gameboard factory.
    1. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
    2. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
    3. Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    4. Gameboards should keep track of missed attacks so they can display them properly.
    5. Gameboards should be able to report whether or not all of their ships have been sunk.
***************************************************************/

import { Ship } from "./Ship"

function Gameboard() {
    return {
        board: [],
        ships: [
/*             Ship('Carrier', 5),
            Ship('Battleship', 4),
            Ship('Cruiser', 3),
            Ship('Submarine', 3),
            Ship('Destroyer', 2) */
        ],
        allShipsSunk: [false, false, false, false, false],

        placeShip(coordinate, name, length) {
            let ship = Ship(name, length)

            for (let i = 0; i < coordinate.length; i++) {
                this.board[coordinate[i]] = name;
            }
            this.ships.push(ship)
        },

        receiveAttack() {
            return true;
        },

        assignHit(coordinate) {
            this.board[coordinate] = 'hit'
        },

        assignMiss(coordinate) {
            this.board[coordinate] = 'miss'
        },

        createBoard() {
            for(let i = 0; i < 100; i++) {
                this.board.push(null)
            }
        },
    }
}

export { Gameboard }