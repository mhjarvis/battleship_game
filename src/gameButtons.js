function initializeGameButtons() {

    const showForm = document.querySelector('.form-container');

    let startButton = document.querySelector('.start-game-btn')
    let resetButton = document.querySelector('.restart-game-btn')
    let submitForm = document.querySelector('#submit-button')

    startButton.addEventListener('click', () => {
        showForm.style.visibility = 'visible';
        console.log('start')
    })

    resetButton.addEventListener('click', () => {
        showForm.style.visibility = 'visible';
        console.log('reset')
    })

    submitForm.addEventListener('click', () => {
        showForm.style.visibility = 'hidden';
    })
}

export { initializeGameButtons }