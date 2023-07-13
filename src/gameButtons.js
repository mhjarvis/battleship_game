// Initiate function
function initializeButtons() {
    const rotateButton = document.querySelector('#rotate-button')

    rotateButton.addEventListener('click', rotate)
}


// Rotate Ships button
const optionContainer = document.querySelector('.option-container')

let angle = 0

function rotate() {
    const optionShips = Array.from(optionContainer.children)

    angle = angle === 0 ? 90 : 0
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

export { initializeButtons , rotate }


