/**************************************************************
Begin your app by creating the Ship factory function.
    1. Your ‘ships’ will be objects that include their length, the number of times they’ve been hit, and whether or not they’ve been sunk.
    2. Ships should have a hit() function that increases the number of ‘hits’ in your ship.
***************************************************************/


function Ship(length) {
    return {
        length: length,
        numberOfTimesHit: 0,
        isSunk: false,

        hit() {
            this.numberOfTimesHit++;
        }
    }
}

export { Ship }