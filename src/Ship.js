class Ship {
    constructor(length, name) {
        this.length = length,
        this.name = name,
        this.numberOfHits = 0,
        this.isSunk = false
    }
    hit() {
        this.numberOfHits += 1;
    }
    isSunk() {
        if (this.length === this.numberOfHits) {
            this.isSunk = true;
        }
    }
}