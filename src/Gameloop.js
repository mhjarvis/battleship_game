import { Gameboard } from "./Gameboard";
import { deployListeners } from './EventListeners';

let playerBoard, computerBoard;

function gameLoop() {

    // Create gameboards
    playerBoard = new Gameboard;
    computerBoard = new Gameboard;

    createBoardInDOM(playerBoard, 'player-area', 'p', '')
    createBoardInDOM(computerBoard, 'computer-area', 'c', 'c')

    deployListeners()

    function createBoardInDOM(player, tag, classPrefix, idPrefix) {
        for(let i = 1; i <= player.board.length; i++ ){ 
            const DOMLocation = document.querySelector(`#${tag}`)
            const div = document.createElement('div');
            div.className = classPrefix + 'grid';
            div.id = idPrefix + i;
            div.innerText = i;
            DOMLocation.append(div)
        }
    }


}

// Toggle isHorizontal value in ships arrray
function toggleOrientation(shipName) {
    const index = playerBoard.ships.findIndex(x => x.name === shipName);
    playerBoard.ships[index].isHorizontal = !playerBoard.ships[index].isHorizontal;
    console.log('ship isHorizontal: ', playerBoard.ships[index].isHorizontal)
}

function addPlayerShipLocation (shipName, shipID) {
    // console.log('shipName: ' + shipName + 'shipID' + shipID)
    playerBoard.placeShip(shipName, shipID)
    console.log(playerBoard.board)
}




export { gameLoop, toggleOrientation, addPlayerShipLocation }