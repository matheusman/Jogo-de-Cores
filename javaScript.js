const $H1 = document.getElementById('text')
const squares = document.querySelectorAll('.square')
const game = {}
const randomNumber = () => Math.ceil(Math.random() * 255)
const generateId = () => Math.random().toString(36).substring(2)

function squareColor () {
    squares.forEach( square => {
        square.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
        square.id = generateId()
    })
    selectColors()
}


function selectColors () {
    const random = (Math.random() * 5).toFixed(0)
    const backgroundSelected = squares[random]
    const color = [randomNumber(), randomNumber(), randomNumber()]
    const text = `rgb(${color[0]} , ${color[1]} , ${color[2]})`
    $H1.innerText = text
    backgroundSelected.style.backgroundColor = text
    game.id = backgroundSelected.id
}

function winnerGame (event) {
    const id = event.target.id
    if (id === game.id) {
        event.target.classList.add('animacao')
        setTimeout( () => {
            squares.forEach(square => {
            square.classList.remove('animacao')
            square.classList.remove('animacao-false')
        })
        squareColor()
        }, 1500)
        
    } else {
        event.target.classList.add('animacao-false')
    }
}

squares.forEach(square => square.addEventListener('click', winnerGame))
squareColor()