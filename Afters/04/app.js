// SCOPE - SALUDAR

let saludo = "Hola Mundo!"

function saludar() {

    let saludo = "Hola Coders!"
    console.log(saludo)

}

// saludar()


// SUMA - RANGO

let a = 20

const suma = (a, b) => {
    let resultado = a + b
    return resultado
}

// const resultado = suma(10, 20)
// console.log(resultado)

// sumarRango(1, 5)
// 1 + 2 + 3 + 4 + 5 = 15

const sumarRango = (inicio, limite) => {
    let resultado = 0

    if (inicio <= limite) {
        for (inicio; inicio <= limite; inicio++) {
            resultado = suma(resultado, inicio)
        }
    } else {
        for (inicio; inicio >= limite; inicio-- ) {
            resultado = suma(resultado, inicio)
        }
    }

    return resultado
}

const resultado = sumarRango(120, 1)
// console.log( resultado )


// PRESTAMO

// Pasar el nombre del banco, monto:
// funcion prestamo("Macro", 100000) = 130000
// funcion prestamo("Santander", 100000) = 120000

const prestamo = (banco, monto) => {

    let interes

    switch(banco.toLowerCase()) {
        case "santander":
            interes = 1.10
            break
        case "macro":
            interes = 1.20
            break 
        case "nacion":
            interes = 1.50
            break
    }

    return monto * interes
}

const pedirDatos = () => {
    
    let bancoUsuario = prompt('Ingrese el banco')
    let montoUsuario = parseInt(prompt('Ingrese monto'))

    return prestamo(bancoUsuario, montoUsuario)
}

console.log( pedirDatos() )
