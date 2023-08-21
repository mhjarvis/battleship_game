/**************************************************************
Create Gameboard factory.
    1. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
    2. 
***************************************************************/

import { Ship } from "./Ship"

function Gameboard() {
    return {
        
        board: [],
        ships: [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)],
        allShipsSunk: [false, false, false, false, false],

        placeShip() {
            return true;
        },

        receiveAttack() {
            return true;
        },

        assignHit() {
            return true;
        },

        assignMiss() {
            return true;
        },

        createBoard() {

        },
    }
}

export { Gameboard }