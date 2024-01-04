import { Gameboard } from "./Gameboard";
import { initiateListeners, shoot } from "./Listeners";

let playerBoard, computerBoard;             // Gameboard objects

function setup() {                          // initial setup
    playerBoard = new Gameboard
    computerBoard = new Gameboard

    placePlayerShips()                      // initial player placement
    placeComputerShips()                    // initial computer placement (does not change)
    initiateListeners()                     // initial listeners for buttons
}

function game() {                           // only updates initial player notificiation of their turn
    const sendOutput = document.getElementById('output')
    sendOutput.innerText = 'Your shot!'
}

/**
 * Performs basic player shot once player clicks on CPU's gameboard
 */
function resolvePlayerShot(id) {
    let index = id.slice(1)                     // get index for the computerBoard.board object
    computerBoard.receiveAttack(index, id)      // update computerBoard.board & DOM coloring
    checkForWin()                               
}

/**
 * Performs random guess for CPU, updates object and text-outputs
 */
function resolveCPUShot() {
    const output = document.getElementById('output')        
    output.innerText = 'Computer is thinking...'            
    let grid = getRandomGrid() + 1                      // get number between 1 - 100

    while (true) {
        if (playerBoard.board[grid] !== 'hit' && playerBoard.board[grid] !== 'miss') {
            playerBoard.receiveAttack(grid, grid)       // if legal, take shot
            break
        } else {
            grid = getRandomGrid() + 1                  // attempt again
            continue
        }
    }
    game()                                                              // update output to player
    checkForWin()                                                       // test win condition
}

/**
 * Test both player objects for win condition
 */
function checkForWin() {
    const output = document.getElementById('output')
    if (playerBoard.testAllSunk() === true) {
        output.innerText = 'The Computer beat you this time!'
        removeAllCPUListeners()                                         // makes board obsolete
    }
    if (computerBoard.testAllSunk() === true) {
        output.innerText = 'You won this round!'
        removeAllCPUListeners()                                         // makes board obsolete
    }
}

/**
 * 
 * This function creates and adds a gameboard to the DOM. It first retrieves the preset
 * container element. Then creates a new div, adds a class name and id, then appends
 * everything to either the player container, or the computer container.
 */

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
}

/**
 * Show and update CPU board in DOM
 */
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
 * Create and place player ships, and updates the DOM
 */
function placePlayerShips() {
    const container = document.getElementById('player-area');
    resetDOMBoard(container)

    playerBoard.board = []

    createPlayerInDOM('player-area', 'p', '')


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
    for (let i = 0; i < 100; i++) {
        if (playerBoard.board[i] !== undefined) {
            document.getElementById(i).classList.add('ship-color')
        }
    }
}

function createPlayerInDOM(tag, classPrefix, idPrefix) {
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
            document.getElementById(idPrefix + i).classList.add('playerBoard.board[i - 1]')
        } 
    }
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

/**
 * Remove all child elements of the parent element in the DOM
 */
function resetDOMBoard(parent) {
    while (parent.firstChild) {
        parent.firstChild.className = '';
        parent.removeChild(parent.firstChild);
    }
}

/**
 * Remove all CPU eventListeners so that further clicks on the CPU board does not do anything
 */
function removeAllCPUListeners() {
    for (let i = 1; i <= 100; i++) {
        const gridID = document.getElementById(`c${i}`)
        gridID.removeEventListener('click', shoot)
    }
}

export { setup, placePlayerShips, reset, game, resolvePlayerShot, resolveCPUShot }