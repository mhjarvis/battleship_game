import { Gameboard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"

function gameLoop() {

    console.log('This is the gameloop starting...')
    
    const computerBoard = new Gameboard();
    const playerBoard = new Gameboard();
    
    console.log(`Creating computerBoard and playerBoard:`)
    console.log(JSON.stringify(computerBoard))
    console.log(JSON.stringify(playerBoard))














}

export { gameLoop }