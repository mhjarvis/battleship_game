class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.numberOfHits = 0;
        this.isSunk = false;
    }
    hit() {
        this.numberOfHits += 1;
    }
    checkIfSunk() {
        if (this.length === this.numberOfHits) {
            this.isSunk = true;
        }
    }
}

export { Ship }