import { initializeButtons } from "./gameButtons";
import { createBoard } from "./gameBoard";
import { Ship } from "./createShip";

(function () {

    initializeButtons();
    createBoard('yellow', 'player');
    createBoard('pink', 'computer');

    const destroyer = new Ship('destroyer', 2)
    const submarine = new Ship('submarine', 3)
    const cruiser = new Ship('cruiser', 3)
    const battleship = new Ship('battleship', 4)
    const carrier = new Ship('carrier', 5)

    const ships = [destroyer, submarine, cruiser, battleship, carrier]

    addShipPiece()
    

}())

function addShipPiece(ship) {
    const allBoardBlocks = document.querySelectorAll('#computer div')
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = false

    let randomStartIndex = Math.floor(Math.random() * 100)
    console.log(randomStartIndex)

    let shipBlocks = []

    for (let i = 0; i < ship.length; i++) {
        if(isHorizontal) {
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i])
        } else {
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) = i + 10])
        }
    }
}

