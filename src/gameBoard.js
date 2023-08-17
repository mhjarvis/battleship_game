// Create Gameboard
const gamesBoardContainer = document.querySelector('#gamesboard-container')

const width = 10

function createBoard(color, user) {

    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user

    gamesBoardContainer.append(gameBoardContainer);

    for (let i = 0; i < 100; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }

}

export { createBoard }

