// Ship factory function

function createShip(length) {
    return {
        length: length,
        numberOfTimesHit: 0,
        isSunk: false,
    }
}

export { createShip }