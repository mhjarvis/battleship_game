

function placePlayerShips() {
    
    const textOutput = document.querySelector('.text-output')

    textOutput.innerHTML = 'Let place your Cruiser'

    let cells = document.querySelectorAll('.player-board-cell')

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            let id = event.target.id;
            
        })
    }








}

export { placePlayerShips }