import { placePlayerShips, reset, game, resolvePlayerShot, resolveCPUShot } from "./Gameloop";

/**
 * These are initial eventListeners that will attach to the three avaiable buttons:
 * 'Randomize' button, 'Start Game' button, 'Reset Game' Button
 */
function initiateListeners() {
    const randomizeButton = document.getElementById('randomize-button')
    const startButton = document.getElementById('start-button')
    const resetButton = document.getElementById('reset-button')

    randomizeButton.addEventListener('click', () => {
        placePlayerShips()                                      // reset player ships and update player obj
    })                                                          // cpu's ships will never be touched

    startButton.addEventListener('click', () => {
        randomizeButton.classList.toggle('hidden')              // toggle visibilitiy of: Randomize button
        startButton.classList.toggle('hidden')                  // Start Button
        resetButton.classList.toggle('hidden')                  // Reset Button

        secondaryListeners()                                    // add listeners to the CPU's DOM grid squares

        const getOutput = document.getElementById('output')
        getOutput.innerText = 'Your Shot!'                      // tell player it is their turn
    })

    resetButton.addEventListener('click', () => {               
        randomizeButton.classList.toggle('hidden')              // toggle visibility of: Randomize button
        startButton.classList.toggle('hidden')                  // Start button
        resetButton.classList.toggle('hidden')                  // Reset button
        reset()
    })
}

/**
 * Secondary Listeners are solely for the purpose of recognizing player shots, resolving them, and then 
 * making that grid square obsolete in terms of clicks
 */
function secondaryListeners() {
    const allComputerSquares = document.querySelectorAll('.cgrid')      // get all target squares
    for (let square of allComputerSquares) {
        square.addEventListener('click', shoot)
    }
}

function shoot(event) {
    let grid = document.getElementById(event.target.id)         // get the id of the grid that was clicked
    resolvePlayerShot(event.target.id)                          // pass to get resolved

    let output = document.getElementById('output')
    output.innerText = 'CPU is thinking...'

    setTimeout(function () {                                    // resolve computer shot after wait
        resolveCPUShot()
    }, 500)


    grid.removeEventListener('click', shoot)                    // removes this listener for subsequent clicks
}                                                               // will do nothing

export { initiateListeners, shoot }