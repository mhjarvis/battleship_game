/**************************************************************
Begin your app by creating the Ship factory function.
    1. Your ‘ships’ will be objects that include their length, the number of times they’ve been hit, and whether or not they’ve been sunk.
    2. Ships should have a hit() function that increases the number of ‘hits’ in your ship.
    3. isSunk() should be a function that calculates it based on their length and the number of ‘hits’.

REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
***************************************************************/

class Ship {
    constructor(name, length, coordinates) {
        this.name = name;
        this.length = length;
        this.timesHit = 0;
        this.isSunk = false;
        this.coordinates = [];
    }

    hit() {
        this.timesHit++;
    }

    isSunk() {
        if (this.length === this.timesHit) {
            this.isSunk = true;
            console.log(`${this.name} is Sunk!`);
            return true;
        }
    }
}

export { Ship }