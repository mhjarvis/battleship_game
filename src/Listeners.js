import { placePlayerShips } from "./GameLoop";

function initiateListeners() {

    let randomizeButton = document.getElementById('randomize');

    randomizeButton.addEventListener('click', () => {
        placePlayerShips()
    })





}


export { initiateListeners }