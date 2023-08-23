
// hide cover

function startInitialListeners() {
    
    // Event listener to hide cover
    document.querySelector('.cover').addEventListener('click', function() {
        document.querySelector('.cover').style.display = 'none';
    })

    // Add Even listeners to each individual board cell
    const playerCells = document.querySelectorAll('.player-board-cell')
    console.log(playerCells)
    const computerCells = document.querySelectorAll('.computer-board-cell')
    
    for (let i = 0; i < playerCells.length; i++) {
        playerCells[i].addEventListener('click', function() {
            console.log('poop')
        })
    }

}

export { startInitialListeners }