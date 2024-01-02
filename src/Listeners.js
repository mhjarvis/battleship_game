import { placePlayerShips } from "./Gameloop";

function initiateListeners() {

    let randomizeButton = document.getElementById('randomize');

    randomizeButton.addEventListener('click', () => {
        placePlayerShips()
    })





}


export { initiateListeners }