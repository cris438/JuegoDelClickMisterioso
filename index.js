let btn = document.querySelectorAll('.btn')
let intentos = document.querySelector('.intentos')
let contador = 0
let bandera = false

let botonRandom = () => {
    let btnRandom = Math.floor(Math.random() * 24);
    btnRandom = btnRandom.toString()
    return btnRandom
}
let ganador = botonRandom()

let contadorIntentos = () => {
    contador++
    intentos.textContent = contador
}
btn.forEach(boton => {
    boton.addEventListener('click', (event) => {
        if (!bandera) {
            if (event.target.classList.contains(ganador)) {
                contadorIntentos()
                boton.style.backgroundColor = 'rgb(110, 0, 0)'
                boton.style.color = 'white'
                boton.textContent = 'Ganasteeeee'
                bandera = true
            } else if (event.target.classList.contains('reinicio')) {
                ganador = botonRandom()
                location.reload()
            } else {
                contadorIntentos()
                boton.style.backgroundColor = 'rgb(10, 0, 39)'
                boton.disabled = true
            }
        } else if (event.target.classList.contains('reinicio')) {
            ganador = botonRandom()
            location.reload()
        } else {
            boton.disabled = true
        }
    })
})
