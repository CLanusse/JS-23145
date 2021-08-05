//  === FUNCIONES === 


// declaración de la función

// llamado a la función

// let numero = parseInt(prompt('Ingrese su nombre'))
// let nombre = prompt('Ingrese su nombre')

// saludar(nombre)

function saludarPorAlert() {
    let nombre = prompt('Ingrese su nombre')
    alert('Hola ' + nombre)
}

// saludarPorAlert()

function saludar(saludo) {
    // let resultado = saludo + saludo + saludo
    console.log("Hola " + saludo)
}

function sumar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

let suma = sumar(10, 20)

alert( sumar( 20, 30 ) ) 






