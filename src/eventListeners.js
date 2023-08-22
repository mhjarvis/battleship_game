

// hide cover

function startInitialListeners() {
    
    // Event listener to hide cover
    document.querySelector('.cover').addEventListener('click', function() {
        document.querySelector('.cover').style.display = 'none';
    })
}

export { startInitialListeners }