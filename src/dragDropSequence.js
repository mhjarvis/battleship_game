

function dragDropSequence() {
    const item = document.querySelectorAll('.ship')

    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('dragstart', dragstart)
    }
}

function dragstart(e) {
    console.log('drag starts...')

    e.dataTransfer.setData('text/plain', e.target.id)
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)
    
}

export { dragDropSequence }