import { Gameboard } from "./Gameboard"

let playerboard, computerboard;
let theShips = [
    {name: 'Cruiser', length: 5},
    {name: 'BattleShip', length: 4}
]

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
    placePlayerShips()
    playerboard.placeShip([9, 19, 29, 39, 49], 'Cruiser', 5)
    console.log(playerboard.board)
    console.log(playerboard.ships)
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


function placePlayerShips() {
    
    for (let i = 0; i < theShips.length; i++) {
        console.log(theShips[i].name)

        

        
        const textOutput = document.querySelector('.text-output')
        textOutput.innerHTML = `Let place your ${theShips[i].name}`      
        
        
    }


    let cells = document.querySelectorAll('.player-board-cell')

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            let id = event.target.id;
            playerboard.board[i] = 'shit'
            console.log(playerboard.board)
        })
    }








}













export { startGameLoop }