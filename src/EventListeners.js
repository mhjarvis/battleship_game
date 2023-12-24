import { toggleOrientation } from "./GameLoop";

function deployListeners() {
    const flip = document.querySelector('#flip');
    const ships = document.querySelectorAll('.ship-piece');
    const playerBoxes = document.querySelectorAll('.pgrid')


    // EventListener for the flip button
    flip.addEventListener('click', () => {
        for (let ship of ships) {
            changeHW(ship);
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
            console.log(num)
            let box = document.getElementById(num)
            console.log(box)
            
            box.style.backgroundColor = 'gray';
        })

        box.addEventListener('dragleave', (e) => {carrier
            e.preventDefault();
            let num = e.target.id;
            let box = document.getElementById(num);
            box.style.backgroundColor = 'white';
        })
    }

}

/**
 * THE FOLLOWING ARE FUNCTIONS FOR DRAG EVENTS ONLY 
 */

// Function that flips ship verticle / horizontally
const changeHW = (ship) => {
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
    e.dataTransfer.setData("text/plain", e.target.id);
    // e.dataTransfer.setData('text/plain', e.target.class);
    e.dataTransfer.dropEffect = 'move';
    //console.log('got the data')
    //const ship = document.querySelector(`#${e.target.id}`);
}

/**
 * THE FOLLOWING AFFECT THE DROP ZONE ELEMENTS
 */



export { deployListeners }