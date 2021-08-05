

const usuario = "Lautaro"

// function saludar() {
//     const usuario = "Lautaro"
//     return usuario
// }

function saludarDeNuevo() {
    // console.log( usuario )
    console.log( saludar() )
}

// saludarDeNuevo()

// const usuario = saludar()
// console.log(usuario)

//  FUNCTIONES FLECHA y ANONIMAS 


// function sumar(a, b) {
//     return a + b
// }

// const sumar = function (a, b) {
//     return a + b
// }

// function saludar () {
//     alert("Hola Mundo!")
// }

const saludar = () => { alert("Hola Mundo Global! ") }
// saludar()

// const sumar = (a, b) => {
//     return a + b
// }

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const iva = (x) => x * 1.21

// console.log( sumar(30, 20) )
// console.log( restar(10, 8))
// console.log( iva(100) )


const calcularPresupuesto = (ahorro, sueldo, impuestos) => {
    let resultado = sumar(ahorro, sueldo)
    resultado = restar(resultado, impuestos)
    resultado = iva(resultado)
    return resultado
}



console.log( calcularPresupuesto(25000, 12, 6500) )


