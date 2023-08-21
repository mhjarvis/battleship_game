const funcs = require('../Ship');

describe("Create Ship Object functions", () => {

    test('hit function increases numberOfHits by 1', () => {
        let testShip = funcs.Ship(2)
        testShip.hit();
        
        expect(testShip.hit().funcs..toBe(1))
    })

})