const funcs = require('../Gameboard');

// TESTS FOR GAMEBOARD CLASS
describe("Create Gameboard object", () => {

    test('createBoard() creates array with length of 100', () => {
        let testBoard = new funcs.Gameboard()
        testBoard.createBoard()
        expect(testBoard.board.length).toEqual(100)
    })

/*     test('hit() function increases numberOfHits by 1', () => {
        let testShip = new funcs.Ship('battleship', 2)
        testShip.hit()
        expect(testShip.timesHit).toEqual(1)
    })
    test('checkIsSunk() returns true when numberOfHits matches length', () => {
        let testShip = new funcs.Ship('battleship', 1)
        testShip.hit()
        testShip.checkIsSunk()
        expect(testShip.isSunk).toEqual(true)
    }) */
})

// npm test
// npm test <specific test name>