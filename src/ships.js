function Ship(length) {
    return {
        length: length,
        numberOfHits: 0,
        sunk: false,

        hit() {
            this.numberOfHits++;
        },

        isSunk() {
            if(this.numberOfHits === length) {
                return true;
            }
            return false;
        }
    }
}

export { Ship };