import { toggleOrientation, getPlayerShipSize } from "./GameLoop";

let currentShipName = '';
let currentShipLength;
let isHorizontal = false;
let currentGridSquares = [];

function deployListeners() {
    const flip = document.querySelector('#flip');
    const ships = document.querySelectorAll('.ship-piece');
    const playerBoxes = document.querySelectorAll('.pgrid')


    // EventListener for the flip button
    flip.addEventListener('click', () => {
        for (let ship of ships) {
            changeShipSizing(ship);
            toggleOrientation(ship.id)
            isHorizontal = !isHorizontal;
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
    currentShipLength = getShipLength(currentShipName);
    console.log('Current ship length is ', currentShipLength)

    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = 'move';

    // WORKING - GET THE AFFECTED GRID BOXES
    //let arr = getAffectedGridBoxes(currentShipLength, e.target.id)
}

/**
 * DROP ZONE
 */

const addDropHandlers = (box) => {
    // DRAG ENTER
    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        //document.getElementById(e.target.id).style.backgroundColor = 'gray'     // highlight on hover
        updateCurrentGridBoxes(e.target.id)
        updateGridBoxColor()
        console.log('done')
    })
    // DRAG OVER
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    // DRAG LEAVE
    box.addEventListener('dragleave', (e) => {
        e.preventDefault();
        document.getElementById(e.target.id).style.backgroundColor = 'white';
    })
    // ON DROP
    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        console.log(data)
    })
}

function getShipLength(name) {
    if (name === 'carrier') return 5
    if (name === 'battleship') return 4
    if (name === 'cruiser' || name === 'submarine') return 3
    if (name === 'patrolboat') return 2
}

function checkIfValidDrop(ship) {

}

// Creates an array of values of where the current dragged ship is located
function updateCurrentGridBoxes(boxID) {
    let num = parseInt(boxID)
    currentGridSquares = [num]

    if (isHorizontal === false) {
        for (let i = 1; i < currentShipLength; i++) {
            num = num + 10
            if (num > 0 && num < 101) {
                currentGridSquares.push(num)
            }
        }
    } else {
        for (let i = 1; i < currentShipLength; i++) {
            num -= 1
            if (num > 0 && num < 101) {
                currentGridSquares.push(num)
            }
        }
    }
}

function updateGridBoxColor() {
    console.log('is it here?')
    for (let i = 0; i < currentGridSquares.length; i++) {
        console.log("updating grid", currentGridSquares[i])
        document.getElementById(currentGridSquares[i]).style.backgroundColor = 'gray'
    }
}


export { deployListeners }