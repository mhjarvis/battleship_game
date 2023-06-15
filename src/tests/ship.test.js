import { Ship } from '../ship';

describe('Ship factory function', () => {

    test('returns patrol boat length correctly', () => {
        expect(Ship(2).length).toBe(2)
    })
})