function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const text = document.getElementById('extra')

    if(button.innerHTML === 'More'){
        button.innerHTML = 'Less'
        text.style.display = 'block'
    }else {
        button.innerHTML = 'More'
        text.style.display = 'none'
    }
}