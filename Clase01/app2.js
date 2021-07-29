const anioActual = 2021

let nombre = prompt("Ingrese su nombre: ")
let edad = prompt("Ingrese su edad: ")
edad = parseInt(edad)

// let edad = parseInt( prompt("Ingrese su edad: ") )
// edad = ""

let mensaje = "Tu nombre es " + nombre + " y tu edad es " + edad

alert(mensaje)

let anioNacimiento = anioActual - edad
// let anioNacimiento = anioActual - Number(edad)
alert("Naciste en " + anioNacimiento)

// console.log(mensaje)
// console.log("Tu nombre es " + nombre + " y tu edad es " + edad)



