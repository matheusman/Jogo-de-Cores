const $H1 = document.getElementById('text')
const square = document.getElementsByClassName('square')

const randomColor = () => {
    const color = {
    cor1 : Math.ceil(Math.random() * 255),
    cor2 : Math.ceil(Math.random() * 255),
    cor3 : Math.ceil(Math.random() * 255),
    }
    return colorAll = [color.cor1, color.cor2, color.cor3]
}

const factoryGame = () => {
    const colorBackground = randomColor()
    const random = Math.ceil(Math.random() * 6)
    $H1.innerHTML = `RGB(${colorBackground[0]}, ${colorBackground[1]}, ${colorBackground[2]})`
    square[0].style = `background-color: rgb(${colorBackground[0]}, ${colorBackground[1]}, ${colorBackground[2]}); 
    order: ${random};`

    for (let e = 1; e < 7; e++) {

        const colorRandom = randomColor()
        const randomNumber = Math.ceil(Math.random() * 6)
        square[e].style = `background-color: rgb(${colorRandom[0]}, ${colorRandom[1]}, ${colorRandom[2]});
        order: ${randomNumber};`

        square[e].addEventListener('click', () => {

            const listE = square[e]
            listE.classList.toggle("animacao-false")
            if (listE.classList.contains("animacao-false")) {
                setTimeout( () => {
                    listE.classList.remove("animacao-false")
                }, 1000)
            } else listE.classList.toggle("animacao-false")
            if (square[0].classList.contains("animacao")) {
                listE.classList.remove("animacao-false")
            }

        })
    }
}

const animationNameRemove = () => {
    const list = square[0]
    list.classList.toggle("animacao")
    if (list.classList.contains("animacao")) {
        setTimeout( () => {
            list.classList.remove("animacao")
            factoryGame()
        }, 1000)
    } else list.classList.toggle("animacao")
}

square[0].addEventListener('click', animationNameRemove)

animationNameRemove
factoryGame()