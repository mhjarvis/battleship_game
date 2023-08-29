/**************************************************************
Create Player.
    1. Players can take turns playing the game by attacking the enemy Gameboard.
    2. The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
***************************************************************/

class Player {
    constructor() {

    }

    // get a random shot location for the computer that is free of hits/misses
    getShotLocation(arr) {
        let val = null

        while (val === null) {
            let location = this.getRandomInt(0, 99)     // get random number 0 - 99

            if (arr[location] === undefined) {      // find place free of shots
                val = location                      // THIS NEEDS TO BE UPDATED
            } 
        }
        return val
    }

    // random number generator
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

export { Player }