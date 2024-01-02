import { placePlayerShips, reset } from "./Gameloop";

function initiateListeners() {

    const randomizeButton = document.getElementById('randomize-button')
    const startButton = document.getElementById('start-button')
    const resetButton = document.getElementById('reset-button')

    randomizeButton.addEventListener('click', () => {
        placePlayerShips()
    })

    startButton.addEventListener('click', () => {
        randomizeButton.classList.toggle('hidden')
        startButton.classList.toggle('hidden')
        resetButton.classList.toggle('hidden')
    })

    resetButton.addEventListener('click', () => {
        randomizeButton.classList.toggle('hidden')
        startButton.classList.toggle('hidden')
        resetButton.classList.toggle('hidden')

        reset()
    })




}


export { initiateListeners }