/**************************************************************
Begin your app by creating the Ship factory function.
    1. Your ‘ships’ will be objects that include their length, the number of times they’ve been hit, and whether or not they’ve been sunk.
    2. Ships should have a hit() function that increases the number of ‘hits’ in your ship.
    3. isSunk() should be a function that calculates it based on their length and the number of ‘hits’.

REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
***************************************************************/

function Ship(name, length) {
    return {
        name: name,
        length: length,
        numberOfTimesHit: 0,

        hit() {
            this.numberOfTimesHit++;
        },

        isSunk() {
            if (this.length === this.numberOfTimesHit) {
                return true;
            }
            return false;
        },
    }
}

export { Ship }