import { Ship } from "./ship";

function Gameboard() {

    return {

        createShip(length) {
            return Ship(length)
        },

        receiveAttack(arr) {

        }
    }
}

export { Gameboard }