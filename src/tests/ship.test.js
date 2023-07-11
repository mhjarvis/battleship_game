import { Ship } from '../ship';

describe('Ship factory function', () => {

    test('returns patrol boat length correctly', () => {
        expect(Ship(2).length).toBe(2)
    })
    test('hits increase number of hits', () => {
        let s1 = Ship(4);
        s1.hit();
        expect(s1.numberOfHits).toBe(1)
    })
    test('multiple hits return correct numberOfHits', () => {
        let s1 = Ship(4);
        s1.hit();
        s1.hit();
        s1.hit();
        expect(s1.numberOfHits).toBe(3)
    })
    test('ship isSunk status remains false after ship takes less than its total hits', () => {
        let s1 = Ship(3);
        s1.hit();
        expect(s1.sunk).toBe(false)
    })
    test('ship is sunk when receiving hits equal to its length', () => {
        let s1 = Ship(2);
        s1.hit();
        s1.hit();
        expect(s1.isSunk()).toBe(true);
    })
})