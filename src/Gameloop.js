import { Gameboard } from "./Gameboard";
import { initiateListeners } from "./Listeners";


let playerBoard, computerBoard;

function game() {

    // Create gameboards
    playerBoard = new Gameboard
    computerBoard = new Gameboard

    placePlayerShips()  // initial; randomized with button

    //createBoardInDOM('playerBoard', 'player-area', 'p', '')
    //createBoardInDOM('computerBoard', 'computer-area', 'c', 'c')

    // Add listeners as needed
    initiateListeners()



}

/**
 * 
 * This function creates and adds a gameboard to the DOM. It first retrieves the preset
 * container element. Then creates a new div, adds a class name and id, then appends
 * everything to either the player container, or the computer container.
 */

function createBoardInDOM(tag, classPrefix, idPrefix) {
    for(let i = 1; i <= 100; i++ ){ 
        const DOMLocation = document.querySelector(`#${tag}`)   // get container element
        const div = document.createElement('div')               // create new div
        div.className = classPrefix + 'grid'                    // add class
        div.id = idPrefix + i                                   // add ID
        DOMLocation.append(div)                                 // append

        /**
         * Because this version auto-places the player's ships and allows them to randomize it,
         * we are adding the ship's name to the class list and styling using that approach.
         */
        if (playerBoard.board[i - 1] !== undefined) {
            document.getElementById(idPrefix + i).classList.add(playerBoard.board[i - 1])
        } 
    }
}

/**
 * Remove all child elements of the parent element in the DOM
 */
function resetDOMBoard(parent) {
    while (parent.firstChild) {
        parent.firstChild.className = '';
        parent.removeChild(parent.firstChild);
    }
}

function placePlayerShips() {
    const container = document.getElementById('player-area');
    resetDOMBoard(container)

    playerBoard.board = []

    createBoardInDOM('player-area', 'p', '')


    for (let i = 0; i < 5; i++) {
        let ship = playerBoard.ships[i]
        let horizontal = randomBool()
        let isValid = false
        let thisShipsLocation = []

        while (isValid === false) {
            if (horizontal === true) {
                let arr = getVerticleArray(ship.length)
                let test = true
        
                for (let a of arr) {
                    if (a <= 0) {
                        test = false
                    } else if (playerBoard.board[a] !== undefined) {
                        console.log('space taken')
                        test = false
                    }
                }
                if (test === true) {
                    isValid = true;
                    thisShipsLocation = arr
                }
            } else {
                let arr = getHorizontalArray(ship.length)
                let test = true

                for (let a of arr) {
                    if (a < 0) {
                        test = false
                    } else if (a % 10 === 0 && a != arr[0]) {
                        test = false
                    } else if (playerBoard.board[a] !== undefined) {
                        test = false
                    }
                }
                if (test === true) {
                    isValid = true;
                    thisShipsLocation = arr
                }
            }
        }
        
        // update playerBoard
        for (let x of thisShipsLocation) {
            playerBoard.board[x] = ship.name
        }
    }
    //createBoardInDOM(playerBoard, 'player-area', 'p', '')
    for (let i = 0; i < 100; i++) {
        if (playerBoard.board[i] !== undefined) {
            document.getElementById(i).classList.add(playerBoard.board[i])
        }
    }
    //console.log(playerBoard.board)

    
}

/**
 * These functions get a valid list of sequental index numbers for placing the ship passed to it. 
 */

function getVerticleArray(length) {
    let num = getRandomGrid()
    let temp = [num]
    
    for (let i = 1; i < length; i++) {
        num = num - 10
        temp.push(num)
    }
    return temp
}

function getHorizontalArray(length) {
    let num = getRandomGrid()
    let temp = [num]

    for (let i = 1; i < length; i++) {
        num = num - 1
        temp.push(num)
    }
    return temp
}

/**
 * This function returns a random number between 0 and 99.
 */
function getRandomGrid() {
    return Math.floor(Math.random() * 100)
}

function randomBool() {
    return Math.random() >= 0.5
}



    /* 



    } else {
        for (let i = 1; i < currentShipLength; i++) {
            num -= 1
            if (num % 10 === 0) break
            if (num > 0 && num < 101) {
                currentGridSquares.push(num)
            }
        }
    } console.log(currentGridSquares)
} */


function checkLegalPlacement(index, length, isHorizontal) {

}



/**
 * This function will reset the gameboard for a new game. IN PROGRESS...
 */

function reset() {
    playerBoard = new Gameboard
    computerBoard = new Gameboard
    createBoardInDOM(playerBoard, 'player-area', 'p', '')
    createBoardInDOM(computerBoard, 'computer-area', 'c', 'c')
    initiateListeners()
}
export { game, placePlayerShips }