
function onDragStart(event) {
    console.log('help')
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
    console.log(event.target.id);
}