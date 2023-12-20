import { toggleOrientation } from "./GameLoop";

function deployListeners() {
    const flip = document.querySelector('#flip');
    const ships = document.querySelectorAll('.ship-piece');

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


}





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
    const ship = document.querySelector(`#${e.target.id}`);



}

export { deployListeners }