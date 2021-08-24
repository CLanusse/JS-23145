

const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')

const titulo = document.getElementById('titulo')

const clickeado = () => {
    console.log('click')
    console.log('gracias por clickearme')
}

// boton1.addEventListener('click', clickeado)
// boton1.addEventListener('mouseover', clickeado) // hover

// opcion 1
// window.addEventListener('click', (event) => {
//     console.log(event.x)
//     console.log(event.y)
//     console.log(event.target)
// })




boton1.addEventListener('click', (event) => {

    console.log(event.x)
    console.log(event.y)
    console.log(event.target)

    alert('Hola Mundo')
})
boton1.addEventListener('mouseover', () => {
    titulo.innerText = "Hiciste hover en Boton 1"
})

// opcion 2

boton2.onclick = () => {
    alert('Clickeaste el BOTON 2')
}
boton2.onmouseover = () => {
    titulo.innerText = "Hiciste hover en Boton 2"
}

// funcion sobre boton3
const clickBoton3 = () => {
    alert('Clickeaste el BOTON 3')
}
const hoverBoton3 = () => {
    titulo.innerText = "Hiciste hover en Boton 3"
}


/// MODAL 

const botonAbrir = document.getElementById('modal-abrir')
const botonCerrar = document.getElementById('modal-cerrar')
const modalContainer = document.getElementById('modal-container')

// botonAbrir.addEventListener('click', ()=>{
//     // modalContainer.classList.add('modal-active')
//     modalContainer.classList.toggle('modal-active')
// })
// botonCerrar.addEventListener('click', ()=>{
//     // modalContainer.classList.remove('modal-active')
//     modalContainer.classList.toggle('modal-active')
// })

const abrirModal = () => {
    modalContainer.classList.toggle('modal-active')
}
botonAbrir.addEventListener('click', abrirModal)
botonCerrar.addEventListener('click', abrirModal)
modalContainer.addEventListener('click', abrirModal)

const modal = document.getElementById('modal')

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

// inputs

const inputNombre = document.getElementById('nombre')
const inputEdad = document.getElementById('edad')

inputNombre.addEventListener('change', ()=>{
    const valor = inputNombre.value

    if (valor.length <= 3) {
        alert('Nombre inválido')
        inputNombre.classList.add('error')
        inputNombre.classList.remove('success')
    } else {
        inputNombre.classList.remove('error')
        inputNombre.classList.add('success')
    }
} )

inputEdad.addEventListener('input', ()=> {
    console.log(inputEdad.value)
})

// submit

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(event)

    const validaciones = prompt('Está todo ok?')

    if(validaciones == "si") {
        formulario.submit()
    }
})