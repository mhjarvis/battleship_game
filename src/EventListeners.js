import { toggleOrientation, getPlayerShipSize } from "./GameLoop";

let currentShipName = '';
let currentShipLength;

function deployListeners() {
    const flip = document.querySelector('#flip');
    const ships = document.querySelectorAll('.ship-piece');
    const playerBoxes = document.querySelectorAll('.pgrid')


    // EventListener for the flip button
    flip.addEventListener('click', () => {
        for (let ship of ships) {
            changeShipSizing(ship);
            toggleOrientation(ship.id)
        }
    })

    // Add dragstart/dragend listeners to each ship element
    for (let ship of ships) {
        window.addEventListener('DOMContentLoaded', () => {
            const element = document.getElementById(ship.id);
            element.addEventListener('dragstart', dragStartHandler);
        })
    }

    // Add dragover and drophandler events
    for (let box of playerBoxes) {
        addDropHandlers(box);
    }

}

/**
 * THE FOLLOWING ARE FUNCTIONS FOR DRAG EVENTS ONLY 
 */

// Function to change ship sizing in CSS
const changeShipSizing = (ship) => {
    let id = document.querySelector(`#${ship.id}`);
    const shipContainer = document.querySelector('.ship-container');

    if (id.classList.contains('test')) {
        id.classList.remove('test');

        let w = id.clientWidth;
        let h = id.clientHeight;
        id.style.width = `${h}px`;
        id.style.height = `${w}px`;

        shipContainer.style.flexDirection = 'row';

    } else {
        id.classList.add('test');

        let w = id.clientWidth;
        let h = id.clientHeight;
        id.style.width = `${h}px`;
        id.style.height = `${w}px`;

        shipContainer.style.flexDirection = 'column';
    }
}

const dragStartHandler = (e) => {
    // set data for use during drop event
    currentShipName = e.target.id; 
    currentShipLength = updateCurrentShipLength(e.target.id);

    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = 'move';

    console.log('var currentShip = ', e.target.id)
}

/**
 * DROP ZONE
 */

const addDropHandlers = (box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        console.log(data)
    })

    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        //const box = document.querySelector(`${e.target.id}`);
        let num = e.target.id;
        let box = document.getElementById(num)        
        box.style.backgroundColor = 'gray';
    })

    box.addEventListener('dragleave', (e) => {
        e.preventDefault();
        let num = e.target.id;
        let box = document.getElementById(num);
        box.style.backgroundColor = 'white';
    })
}

function updateCurrentShipLength () {
    currentShipLength = getPlayerShipSize(currentShipName);
}

function checkIfValidDrop(ship) {

}

function getAffectedGridBoxes(ship) {
    let arr = [];

}

export { deployListeners }