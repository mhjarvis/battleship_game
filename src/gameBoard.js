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
                    'ship': false,
                    'shot': false
                })
            }
        arr.push(subArr);
        subArr = [];
        }
        return arr;
    }
}

export { GameBoard }