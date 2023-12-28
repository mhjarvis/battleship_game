import { toggleOrientation, addPlayerShipLocation } from "./GameLoop";

let currentShipName = '';           // hold ship idea (for drag actions)
let currentShipLength;              // hold ship length info (for drag calculations)
let isHorizontal = false;           // for drag calculations
let currentGridSquares = [];        // grid squares current ship is over (where it will drop)

function deployListeners() {
    const flip = document.querySelector('#flip');           // flip button
    const ships = document.querySelectorAll('.ship-piece'); // html items
    const playerBoxes = document.querySelectorAll('.pgrid') // player board

    // EventListener for the flip button
/*     flip.addEventListener('click', () => {
        for (let ship of ships) {
            if (ship == null) {
                break;
            }
            changeShipSizing(ship);
            toggleOrientation(ship.id)
            isHorizontal = !isHorizontal;
        }
    }) */

    // Add dragstart/dragend listeners to each ship element
/*     for (let ship of ships) {
        window.addEventListener('DOMContentLoaded', () => {
            const element = document.getElementById(ship.id);
            element.addEventListener('dragstart', dragStartHandler);
        })
    } */

    // Add dragover and drophandler events
/*     for (let box of playerBoxes) {
        addDropHandlers(box);
    }
*/
}

/**
 * DRAG EVENT FUNCTIONS
 */

// Change ship sizing in html (for visual reasons only)
/* const changeShipSizing = (ship) => {
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
 */
/* const dragStartHandler = (e) => {
    currentShipName = e.target.id; 
    currentShipLength = getShipLength(currentShipName);     // lookup function

    // Needs Revisions ******
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = 'move';
} */

/* const addDropHandlers = (box) => {
    // DRAG ENTER
    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        removeGridBoxColor();                   // make current grid squares white
        updateCurrentGridBoxes(e.target.id)     // udpate current grid squares vals
        addGridBoxColor()                       // add current highlight color
    })
    // DRAG OVER
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    // DRAG LEAVE
    box.addEventListener('dragleave', (e) => {
        e.preventDefault();
    })
    // ON DROP
    box.addEventListener('drop', (e) => {
        e.preventDefault();
        checkIfValidDrop()
        if (checkIfValidDrop()) {
            for (let el of currentGridSquares) {
                addPlayerShipLocation(currentShipName, el)
            }
            const data = e.dataTransfer.getData('text/plain');
        }
    })
} */

/**
 * This function serves more as a lookup function; it is created here as to
 * avoid calling the actual object and getting the ship length based on the
 * DOMs ID value (of the draged object).
 */
/* function getShipLength(name) {
    if (name === 'carrier') return 5
    if (name === 'battleship') return 4
    if (name === 'cruiser' || name === 'submarine') return 3
    if (name === 'patrolboat') return 2
}

function checkIfValidDrop(ship) {
    if (currentShipLength === currentGridSquares.length) {
        return true
    }
    return false;
} */

/**
 * This function is used to update the currently 'hovered' over grid boxes,
 * which is represented as an array of values (based on ship length and ship
 * orientation (see global variables above). It is used when a draged element
 * enters a valid grid box. 
 */
/* function updateCurrentGridBoxes(boxID) {
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
            if (num % 10 === 0) break
            if (num > 0 && num < 101) {
                currentGridSquares.push(num)
            }
        }
    } console.log(currentGridSquares)
} */

/**
 * These functions will add and remove the gray background-color from
 * the individual grid squares (based on their ID). This is to mimic the
 * hovering effect. It is used during the drag enter effect. 
 */
/* function addGridBoxColor() {
    for (let i = 0; i < currentGridSquares.length; i++) {
        document.getElementById(currentGridSquares[i]).classList.add('gray');
    }
}
function removeGridBoxColor() {
    for (let i = 0; i < currentGridSquares.length; i++) {
        document.getElementById(currentGridSquares[i]).classList.remove('gray');
    }
} */

