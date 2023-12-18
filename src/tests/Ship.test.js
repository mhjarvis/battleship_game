const funcs = require('../Ship')

describe("Create Ship Object functions", () => {

    test("hit() function increases numberOfHits by 1", () => {
            let testShip = new funcs.Ship('battleship', 4);
            testShip.hit();
            expect(testShip.numberOfHits).toEqual(1);
    })
    test("isSunk() returns true when numberOfHits === length", () => {
        let testShip = new funcs.Ship('cruiser', 3);
        testShip.hit();
        testShip.hit();
        testShip.hit();
        testShip.checkIfSunk();
        expect(testShip.isSunk).toEqual(true);
    })
})