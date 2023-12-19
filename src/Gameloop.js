import { Gameboard } from "./Gameboard";
import { deployListeners } from './EventListeners';


function gameLoop() {

    // Create gameboards
    let playerBoard = new Gameboard;
    let computerBoard = new Gameboard;

    createBoardInDOM(playerBoard, 'player-area')
    createBoardInDOM(computerBoard, 'computer-area')

    deployListeners();


    function createBoardInDOM(player, tag) {
        for(let i = 1; i <= player.board.length; i++ ){ 
            const DOMLocation = document.querySelector(`#${tag}`)
            const div = document.createElement('div');
            div.className = 'grid';
            div.id = i;
            div.innerText = i;
            DOMLocation.append(div)
        }
    }


}


export { gameLoop }