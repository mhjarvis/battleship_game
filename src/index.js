import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

let playerboard, computerboard;

(function () {
    playerboard = Gameboard()   
    playerboard.createBoard()
    computerboard = Gameboard()
    computerboard.createBoard()

    // Event listener to hide cover
    document.querySelector('.cover').addEventListener('click', function() {
        document.querySelector('.cover').style.display = 'none';
        console.log("boobs")
    })

}())



console.log(playerboard.board.indexOf(33))
playerboard.assignMiss(33)
console.log(playerboard.board.indexOf(34))

console.log(playerboard)
console.log(computerboard)



// npx webpack --watch

buildBoardInDOM(playerboard, 'player-board')
buildBoardInDOM(computerboard, 'computer-board')

function buildBoardInDOM(boardName, name) {
    
    const getGameboardContainer = document.querySelector('#' + name )
    
    for (let i = 0; i < boardName.board.length; i++) {
        const div = document.createElement('div')
        div.classList.add(name + '-cell')
        div.id = i
        getGameboardContainer.append(div)
        console.log('test')
    }
}

// Event Listener for cover
