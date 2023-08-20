import { Ship } from "./Ship";

let carrier = Ship(5)
let battleship = Ship(4)
let cruiser = Ship(3)
let submarine = Ship(3)
let destroyer = Ship(2)


battleship.hit()
battleship.hit()
battleship.hit()
console.log(battleship.isSunk())

battleship.hit()

console.log(battleship);

console.log(battleship.isSunk())
