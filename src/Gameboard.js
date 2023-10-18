/**************************************************************
Create Gameboard factory.
    1. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
    2. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
    3. Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    4. Gameboards should keep track of missed attacks so they can display them properly.
    5. Gameboards should be able to report whether or not all of their ships have been sunk.
***************************************************************/
import { Ship } from './Ship';

class Gameboard {
    constructor(prefix) {
        this.board = this.createBoard();
        this.numberOfShipsSunk = 0;
        this.ships = [
            this.createShip("destroyer", 2),
            this.createShip("submarine", 3),
            this.createShip("cruiser", 3),
            this.createShip("battleship", 4),
            this.createShip("carrier", 5)
        ];
        this.prefix = prefix;
    }

    createBoard() {
        let temp = [];
        for (let i = 1; i <= 100; i++) {
            temp.push(undefined);
        }
        return temp;
    }

    createShip(name, length) {
        let ship = new Ship(name, length);
        return ship;
    }

    getRandomLocation() {
        return Math.floor(Math.random() * 100) + 1;
    }

    randomPlace() {
        const carrier = document.getElementById('carrier');
        const battleship = document.getElementById('battleship');
        const cruiser = document.getElementById('cruiser');
        const submarine = document.getElementById('submarine');
        const destroyer = document.getElementById('destroyer');

    }

    // Initial setup; auto-place ships
/*     autoPlace() {
        for(let i = 0; i < this.ships.length; i++) {
            let test = false;

            do {
                let testNum = this.getRandomLocation();
                test = this.placeShip(this.prefix + testNum, this.ships[i].orientation, this.ships[i].name, this.ships[i].length);
            } while(test === false)
        }
    } */

    // Function checks and updates legal ship placement
/*     placeShip(gridSquare, orientation, name, length) {
        let squareToNumber = parseInt(gridSquare.slice(1));

        if (orientation === 'vertical' && ((length - 1) * 10 + squareToNumber) <= 100) {
            let gridTemp = gridSquare;
            let testNumber = squareToNumber;

            for(let i = 0; i < length; i++) {
                if(this.board[testNumber]) {
                    return false;
                }
                testNumber += 10;
            }

            for(let i = 0; i < length; i++) {
                if (this.board[squareToNumber] != null) return;
                this.board[squareToNumber] = name;
                document.getElementById(gridTemp).style.backgroundColor = 'gray';
                document.getElementById(gridTemp).innerText = name.slice(0, 1);
                document.getElementById(gridTemp).classList.add(name);
                squareToNumber += 10;
                gridTemp = gridSquare.slice(0, 1) + squareToNumber;
            } return true;
        }
        if(orientation === 'horizontal' && squareToNumber > length && (squareToNumber % 10 >= length || squareToNumber % 10 === 0)) {
            let gridTemp = gridSquare;
            let testNumber = squareToNumber;

            for(let i = 0; i < length; i++) {
                if(this.board[testNumber]) {
                    return false;
                }
                testNumber = testNumber - 1;
            }

            for(let i = 0; i < length; i++) {
                this.board[squareToNumber] = name;
                document.getElementById(gridTemp).style.backgroundColor = 'gray';
                document.getElementById(gridTemp).innerText = name.slice(0, 1)
                squareToNumber -= 1;
                gridTemp = gridSquare.slice(0, 1) + squareToNumber;
            } return true;
        }
        return false;
    } */

}

export { Gameboard }
