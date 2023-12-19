function deployListeners() {

    const flip = document.querySelector('#flip');
    const ships = document.querySelectorAll('.ship-piece');
    const shipContainer = document.querySelector('.ship-container');


    // FLIP Button changes height/width of each element
    // There may be an easier method for doing this
    flip.addEventListener('click', () => {
        for (let ship of ships) {
            let id = document.querySelector(`#${ship.id}`);

            if (id.classList.contains('test')) {
                id.classList.remove('test');

                let w = id.clientWidth;
                let h = id.clientHeight;
                id.style.width = `${h}px`;
                id.style.height = `${w}px`;

                shipContainer.style.flexDirection = 'row';

            } else {
                id.classList.add('test');

                let w = id.clientWidth;
                let h = id.clientHeight;
                id.style.width = `${h}px`;
                id.style.height = `${w}px`;

                shipContainer.style.flexDirection = 'column';
            }
        }
    })

    // 



}

export { deployListeners }