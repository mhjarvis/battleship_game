
const getPlaceShipsBoard = document.querySelector('.place-ships-board');

function createBoard() {
    
    for(let i = 0; i < 10; i++) {

        const div = document.createElement('div');
        div.setAttribute('id', 'box-container' + i);
        div.setAttribute('class', 'box-container');
        getPlaceShipsBoard.appendChild(div);

        for(let j = 0; j < 10; j++) {

            const boxContainer = document.querySelector('#box-container' + i);
            const div = document.createElement('div');
            div.setAttribute('class', 'box');
            div.setAttribute('id', 'box' + i + j);
            div.innerHTML = 'id' + i + j;
            boxContainer.appendChild(div);
        }
    }
    



}

export { createBoard }