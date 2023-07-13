// import { GameBoard } from "./GameBoard"

function initializeGameButtons() {

    let startButton = document.querySelector('.start-game-btn')
    let resetButton = document.querySelector('.restart-game-btn')

    startButton.addEventListener('click', () => {

        console.log('start')
    })

    resetButton.addEventListener('click', () => {
        console.log('reset')
    })
}

export { initializeGameButtons }