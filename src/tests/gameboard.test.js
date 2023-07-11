import { GameBoard } from '../gameBoard';

describe('Gameboard', () => {

    let pt = new GameBoard();

//    test('Gameboard functions are working', () => {
//        expect(pt.createShip(2).length).toBe(2)
//    })
    test('Gameboard length is 10 x 10', () => {
        expect(pt.board.length && pt.board[0].length).toBe(10);
    })







})