import { Ship } from "./ship";

class GameBoard {
    constructor() {
        this.board = this.createBoard();
    }

    createBoard() {
        let arr = [];
        let subArr = [];
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                subArr.push({
                    'coordinate' : [i, j],
                    'ship': false,
                    'shot': false
                })
            }
        arr.push(subArr);
        subArr = [];
        }
        return arr;
    }

    buildBoard(user) {
        const theBoard = document.querySelector(user);

        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                const div = document.createElement('div');
                div.setAttribute('id', 'id' + i + j);
                div.setAttribute('class', 'box')
                theBoard.appendChild(div);
                div.innerHTML = this.board[i][j].coordinate;
                console.log('test')
            }
        }
    }
}

export { GameBoard }