import { placePlayerShips, reset, game, takeShot } from "./Gameloop";

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

        secondaryListeners()        // add listeners to grid-boxes

        const getOutput = document.getElementById('output')
        getOutput.innerText = 'Your Shot!'
    })

    resetButton.addEventListener('click', () => {
        randomizeButton.classList.toggle('hidden')
        startButton.classList.toggle('hidden')
        resetButton.classList.toggle('hidden')

        reset()
    })
}

function secondaryListeners() {
    const allPlayerSquares = document.querySelectorAll('.pgrid')
    const allComputerSquares = document.querySelectorAll('.cgrid')

    for (let square of allPlayerSquares) {
        square.addEventListener('click', () => {

        })
    }

    for (let square of allComputerSquares) {
        square.addEventListener('click', (event) => {
            takeShot(event.target.id)
        })
    }
}


export { initiateListeners }