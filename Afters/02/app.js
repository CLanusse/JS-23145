//  CONDICIONALES 


// ===== EJEMPLO 1 ====== 
// const usuario = prompt('Ingrese su nombre')
// console.log(usuario)
//  true-false

// if (usuario) {
//     console.log("La condición se cumple")
//     alert(usuario)
// } else {
//     alert("Ingreso inválido")
// }

// == falsy  ==
// false
// 0
// ""
// null
// undefined
// NaN


// ==== EJEMPLO 2 ==========
// let numero = parseInt(prompt("Ingrese un número"))
// console.log(numero)
// console.log(typeof numero)

// if (!isNaN(numero)) {

//     if (numero === 1000) {
//         alert("Ingresaste el número 1000")
//     } else if (numero > 1000) {
//         alert("El número es mayor a 1000")
//     } else {
//         alert("El número es menor que 1000")
//     }

// } else {
//     alert("No ingresaste un número")
// }



// ========= EJEMPLO 3 ======= 

let saludo = prompt('Ingrese su saludo').trim().toLowerCase()
// saludo = saludo.toLowerCase().trim()


if (saludo == "hola") {
    alert("Hola! Qué tal?")
} else {
    alert("No me saludaste :(")
}







