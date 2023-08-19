/**************************************************************
Begin your app by creating the Ship factory function.
    1. Your ‘ships’ will be objects that include their length, the number of times they’ve been
       hit, and whether or not they’ve been sunk.
***************************************************************/


function createShip(length) {
    return {
        length: length,
        numberOfTimesHit: 0,
        isSunk: false,
    }
}

export { createShip }