

function addListeners() {

    const carrier = document.getElementById('carrier');
    const battleship = document.getElementById('battleship');
    const cruiser = document.getElementById('cruiser');
    const submarine = document.getElementById('submarine');
    const destroyer = document.getElementById('destroyer');

    let ships = [carrier, battleship, cruiser, submarine, destroyer];
    let cells = document.querySelectorAll('.grid-cell');

    let dragged = null;
    let length = null;

    ships.forEach(function (ship) {
        ship.addEventListener('dragstart', (e) => {
            dragged = e.target;
            length = e.length;
            console.log(dragged, length)
        })
        ship.addEventListener('drag', (e) => {
            console.log('element is being dragged');
        })
        ship.addEventListener('dragend', (e) => {
            console.log('element is done being dragged');
        })
    })

    cells.forEach(function (cell) {
        cell.addEventListener('dragenter', (e) => {
        // document.getElementById(cell.id).style.backgroundColor = 'gray';
        })
        cell.addEventListener('dragleave', (e) => {
            document.getElementById(cell.id).style.backgroundColor = 'white';
        })
        cell.addEventListener('dragover', (e) => {
            e.preventDefault();     // include to ensure drop event fires
        })
        cell.addEventListener('drop', (e) => {
            e.preventDefault();     // prevent default action (open as link)
            e.target.appendChild(dragged);
        })
    })

}

export { addListeners }