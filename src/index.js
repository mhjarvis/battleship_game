import { gameLoop } from "./GameLoop";

gameLoop();

// npx webpack --watch


const carrier = document.getElementById('carrier');
const battleship = document.getElementById('battleship');
const cruiser = document.getElementById('cruiser');
const submarine = document.getElementById('submarine');
const destroyer = document.getElementById('destroyer');

let ships = [carrier, battleship, cruiser, submarine, destroyer];
let cells = document.querySelectorAll('.grid-cell');

ships.forEach(function (ship) {
    ship.addEventListener('dragstart', (e) => {
        console.log('oneventstart');
    })
    ship.addEventListener('drag', (e) => {
        console.log('element is being dragged');
    })
    ship.addEventListener('dragend', (e) => {
        console.log('element is done being dragged');
    })
})

cells.forEach(function (cell) {
    
})

