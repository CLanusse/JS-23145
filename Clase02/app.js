

// const pass = parseInt(prompt('Ingrese  contraseña'))


// const evaluacion = (pass === 123)
// console.log(evaluacion)
// // valores booleanos : true - false


// if (evaluacion) {
//     // código que se ejecuta si se cumple la condición
//     alert("Bienvenido " + admin)
// } else {
//     // código que se ejecuta si NO se cumple la condición
//     alert("El password es incorrecto")
// }

// if (admin == "Conrado") {
//     console.log("Este mensaje se ve?")
// }

// const user = prompt('Ingrese nombre de usuario')

// if (user == "Conrado") {
//     alert("Bienvenido Profe")
// } else if (user == "Lautaro") {
//     alert("Bienenido Tutor")
// } else if (user == "Martin") {
//   alert("Bienvenido Tutor Martin")
// } else {
//     alert("Vos quién sos?")
// }

// const edad = parseInt(prompt('Ingrese su edad'))

// if (edad <= 18) {
//     alert("Sos re joven")
// } else if (edad <= 40) {
//     alert("Ya estás grande")
// } else if (edad > 40) {
//     alert("Estás liquidado")
// } else {
//     alert("No ingresaste un número")
// }

// const user = prompt('Ingrese nombre de usuario')

// if (user !== "") {

//     if (user !== "Conrado") {
//         alert("Usted NO puede ingresar")
//     } else {
//         alert("Bienvenido Conrado")

//         const pass = prompt('Password pls')
    
//         if (pass != 123) {
//             alert("Acceso denegado")
//         } else {
//             alert("Ingreso correcto")
//         }
//     }
    

// } else {
//     alert("NO INGRESASTE NADA")
// }


// ======== INGRESO AL BAR ======

// const edad = prompt('Ingrese su edad')

// if (edad >= 18 && edad <= 50) {
//         alert("Puede ingresar")
// } else {
//     alert("Prohibido")
// }

// const tutor = prompt('Ingrese su nombre de tutor')

// if (tutor != "" && (tutor == "Lautaro" || tutor == "Martin")) {
//     alert("Puede ingresar")
// } else {
//     alert("No sos tutor, salí")
// }

// const user = prompt('Ingrese usuario')
// const pass = prompt('Ingrese pass')

// if ((user != "" && pass != "") && (user == "Conrado" && pass == 123)) {
//     alert("Puede ingresar")
// } else {
//     alert("Denegado")
// }




let cerebro

const hora = parseInt(prompt('Ingrese la hora'))

if (hora >= 22) {
    cerebro = false
} else {
    cerebro = true
}

if (!cerebro) {
    alert("anda a dormir")
} else {
    alert("Seguí de largo")
}

