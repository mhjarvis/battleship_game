import { Ship } from "./ship";

class GameBoard {
    constructor() {
        this.board = this.createBoard();
    }

    createBoard() {
        let arr = [];
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                arr.push({
                    'ship': false,
                    'shot': false
                })
            }
        }
        return arr;
    }
}

export { GameBoard }