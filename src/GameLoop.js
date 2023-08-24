import { Gameboard } from "./Gameboard"

let playerboard, computerboard;

function startGameLoop() {

    // Create player/computer boards
    playerboard = Gameboard()   
    playerboard.createBoard()
    computerboard = Gameboard()
    computerboard.createBoard()

    // Display player/computer boards in DOM
    buildBoardInDOM(playerboard, 'player-board')
    buildBoardInDOM(computerboard, 'computer-board')

    // Get player to place ships
    playerboard.placeShip([9, 19, 29, 39, 49], 'Cruiser', 5)
    console.log(playerboard.board)
}

// Function to display player/computer boards
function buildBoardInDOM(boardName, name) {
    
    const getGameboardContainer = document.querySelector('#' + name )
    
    for (let i = 0; i < boardName.board.length; i++) {
        const div = document.createElement('div')
        div.classList.add(name + '-cell')
        div.id = i
        getGameboardContainer.append(div)
    }
}

// Function to initiate and place ships

export { startGameLoop }