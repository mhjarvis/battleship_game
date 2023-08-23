import { resolvePlayerBoardAction, resolveComputerBoardAction, populatePlaceShipsBoard } from ".";
// hide cover

function startInitialListeners() {
    
    // Event listener to hide cover
    document.querySelector('.cover').addEventListener('click', function() {
        document.querySelector('.cover').style.display = 'none';

        document.querySelector('.place-ships').style.display = 'flex'
        populatePlaceShipsBoard()
        
    })

    // Add Even listeners to each individual board cell
    const playerCells = document.querySelectorAll('.player-board-cell')
    const computerCells = document.querySelectorAll('.computer-board-cell')
    
    // Cell clicks send coordinates of cell to respective resolve function in index.js
    for (let i = 0; i < playerCells.length; i++) {
        playerCells[i].addEventListener('click', function() {
            resolvePlayerBoardAction(event.target.id)
        })
        computerCells[i].addEventListener('click', function() {
            resolveComputerBoardAction(event.target.id)
        })
    }

}

export { startInitialListeners }