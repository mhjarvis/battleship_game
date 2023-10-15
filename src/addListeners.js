
export function addListeners() {
    
    const carrier = document.getElementById('carrier');
    const battleship = document.getElementById('battleship');
    const cruiser = document.getElementById('cruiser');
    const submarine = document.getElementById('submarine');
    const destroyer = document.getElementById('destroyer');

    let arr = [carrier, battleship, cruiser, submarine, destroyer];
    
    for (let a of arr) {
        a.addEventListener('dragstart', (event) => {
            console.log(event.target.id);
        })
    }


}
