const on = document.getElementById('on')
const off = document.getElementById('off')
let lampada = document.getElementById('lampada')

const ligarLamp = () => {
    if (lampada.getAttribute('src') !== "assets/quebrada.jfif") {
        lampada.src = "assets/acesa.jfif"
    }
}

const desligarLamp = () => {
    if (lampada.getAttribute('src') !== "assets/quebrada.jfif"){
        lampada.src = "assets/normal.jfif"
    }
}

const overLamp = () => {
    if (lampada.getAttribute('src') !== "assets/quebrada.jfif"){
        lampada.src = "assets/acesa.jfif"
    }
}

const outLamp = () => {
    if (lampada.getAttribute('src') !== "assets/quebrada.jfif"){
        lampada.src = "assets/normal.jfif"
    }
}

const quebrarLamp = () => {
    if (lampada.getAttribute('src') !== "assets/quebrada.jfif"){
        lampada.src = "assets/quebrada.jfif"
    }
}

lampada.addEventListener('dblclick', () => {lampada.src = "assets/quebrada.jfif"})
lampada.addEventListener('mouseover', overLamp)
lampada.addEventListener('mouseout', outLamp)
on.addEventListener('click', ligarLamp)
off.addEventListener('click', desligarLamp)
