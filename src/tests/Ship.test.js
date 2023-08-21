const funcs = require('../Ship');

describe("Create Ship Object functions", () => {

    test('hit() function increases numberOfHits by 1', () => {
        let testShip = funcs.Ship(2)
        testShip.hit()
        expect(testShip.numberOfTimesHit).toEqual(1)
    })
    test('isSunk() returns true when numberOfHits matches length', () => {
        let testShip = funcs.Ship(1)
        testShip.hit()
        expect(testShip.isSunk()).toEqual(true)
    })
})