import { Gameboard } from "./Gameboard";
import { initiateListeners } from "./Listeners";

let playerBoard, computerBoard;         // Gameboard objects
let isWinner = false                    // For game() loop exit

/**
 * This function is for the intial setup and will place player and computer ships. 
 */

function setup() {
    playerBoard = new Gameboard
    computerBoard = new Gameboard

    placePlayerShips()                      // initial player placement
    placeComputerShips()                    // initial computer placement (does not change)
    initiateListeners()                     // initial listeners for buttons
}

/**
 * This function will initiate upon the 'Start Game' button being clicked. 
 */

function game() {
    const sendOutput = document.getElementById('output')

    sendOutput.innerText = 'Your shot!'



}

function takeShot(id) {
    let target = id.slice(1)
    console.log(target)

    computerBoard.receiveAttack(target)

/*     if (computerBoard.board[target] === undefined) {
        console.log('miss')
    } else if (computerBoard.board[target] === 'miss') {
        console.log('already fired here')
    } else if (computerBoard.board[target] === 'hit') {
        console.log('already fired here')
    } else {
        console.log('HIIIIIITTTTTTT!!!!!!')
    } */
}

function createCPUInDOM(tag, classPrefix, idPrefix) {
    for (let i = 1; i <= 100; i++) {
        const location = document.querySelector(`#${tag}`)
        const div = document.createElement('div')
        div.className = classPrefix + 'grid'
        div.id = idPrefix + i
        location.append(div)

        if (computerBoard.board[i - 1] !== undefined) {
            document.getElementById(idPrefix + i).classList.add(computerBoard.board[i - 1])
        }
    }
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

function placeComputerShips() {
    const container = document.getElementById('computer-area')
    resetDOMBoard(container)
    computerBoard.board = []
    createCPUInDOM('computer-area', 'c', 'c')

    for (let i = 0; i < 5; i++) {
        let ship = computerBoard.ships[i]
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
                    } else if (computerBoard.board[a] !== undefined) {
                        console.log('cpu space taken')
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
                    } else if (computerBoard.board[a] !== undefined) {
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
            computerBoard.board[x] = ship.name
        }
    }
    for (let i = 0; i < 100; i++) {
        if (computerBoard.board[i] !== undefined) {
            document.getElementById('c' + i).classList.add(computerBoard.board[i])
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


/**
 * This function will reset the gameboard for a new game. IN PROGRESS...
 */

function reset() {
    playerBoard = new Gameboard
    computerBoard = new Gameboard
    placePlayerShips()
    placeComputerShips()
}

export { setup, placePlayerShips, reset, game, takeShot }