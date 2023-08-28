const funcs = require('../Ship');

// TESTS FOR SHIP CLASS
describe("Create Ship Object functions", () => {

    test('hit() function increases numberOfHits by 1', () => {
        let testShip = new funcs.Ship('battleship', 2)
        testShip.hit()
        expect(testShip.timesHit).toEqual(1)
    })
    test('checkIsSunk() returns true when numberOfHits matches length', () => {
        let testShip = new funcs.Ship('battleship', 1)
        testShip.hit()
        testShip.checkIsSunk()
        expect(testShip.isSunk).toEqual(true)
    })
})

// 