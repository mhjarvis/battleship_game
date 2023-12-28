import { Gameboard } from "./Gameboard";

let playerBoard, computerBoard;

function gameLoop() {

    // Create gameboards
    playerBoard = new Gameboard;
    computerBoard = new Gameboard;

    createBoardInDOM(playerBoard, 'player-area', 'p', '')
    createBoardInDOM(computerBoard, 'computer-area', 'c', 'c')


}

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





export { gameLoop }