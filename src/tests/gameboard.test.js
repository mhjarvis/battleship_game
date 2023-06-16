import { Gameboard } from '../gameBoard';

describe('Gameboard', () => {

    const pt = Gameboard();

    test('Gameboard functions are working', () => {
        expect(Gameboard().createShip(2).length).toBe(2)
    })
})