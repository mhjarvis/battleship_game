
export function addListeners() {
    
    const carrier = document.getElementById('carrier');
    const battleship = document.getElementById('battleship');
    const cruiser = document.getElementById('cruiser');
    const submarine = document.getElementById('submarine');
    const destroyer = document.getElementById('destroyer');

    let ships = [carrier, battleship, cruiser, submarine, destroyer];
    let cells = document.querySelectorAll('.grid-cell');






    
/*     for (let a of arr) {
        a.addEventListener('dragstart', (event) => {
            console.log('sdfsf');
        })
        a.addEventListener('dragend', (event) => {
            event.preventDefault();
        })
    } */

/*     for (let g of gridCell) {
        g.addEventListener('dragenter', (event) => {
            console.log('poo')
            event.preventDefault();
        })
        g.addEventListener('ondragover', (event) => {
            event.preventDefault();
        })
        g.addEventListener('ondragleave', (event) => {
            event.preventDefault();
        })
        g.addEventListener('ondrop', (event) => {
            event.preventDefault();
            console.log('wefwfewewfwefewff')
        })
    } */


}

function dragstart_handler(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
}

