// ===== Ciclos e iteraciones =====


// let contador = 0
// // contador = contador + 1
// // contador += 1
// // contador++


//    paso 1           paso 2          paso 4
// for (let contador = 0; contador < 5 ; contador++) {

//     // paso 3
//     // escribir el bloque de código que ejecuto en cada ciclo
//     alert("Estás en la vuelta número: " + contador)

// }


// console.log("Fin de la iteracion")


// == TABLA MULTIPLICAR == 


// const tabla = parseInt(prompt('Ingrese la tabla a saber'))

// for (let i = 1; i <= 10; i++) {
//     let resultado = tabla * i
//     alert(tabla + " * " + i + " = " + resultado)
// }


// for (let i = 1; i <= 5; i++) {

//     const nombre = prompt('Ingrese su nombre')
//     alert('Hola ' + nombre + ". Su turno es el n°: " + i)

// }


// let triangulo = ""

// for (let i = 0; i < 8; i++) {

//     triangulo += "#"
//     console.log(triangulo)

//     // triangulo = triangulo + "#"

// }

// const pisos = parseInt(prompt('Ingrese la cantidad de pisos'))

// for (let triangulo = "#"; triangulo.length <= pisos ; triangulo += "#") {

//     if (triangulo.length == 10) {
//         console.log("está creciendo mucho!")    
//         continue
//     }

//     console.log(triangulo)

// }

// let pass = parseInt(prompt('Ingrese la contraseña'))

// while (pass !== 1234) {
//     // lo que ejecuto por cada ciclo
//     alert("Contraseña inválida")
//     pass = parseInt(prompt('Ingrese la contraseña'))
// }


// alert("Sí! Adiviniaste")


// const numero = Math.round( Math.random() * 20 )

// let ingreso = parseInt(prompt('Ingrese el número'))

// while (ingreso !== numero) {
//     alert("Equivocado! Pruebe de nuevo")
//     ingreso = parseInt(prompt('Ingrese el número'))
// }

// alert("Sí! Adiviniaste")


// let pass

// do {
//     // bloque a ejecutar
//     pass = prompt('Ingrese la contraseña')

// } while(pass != 123)



// ===== SWITCH ===== 




// if (tutor == "lautaro") {
//     alert("Tu código es 123")
// } else if (tutor == "martin") {
//     alert("Tuc código es 444")
// } else if (tutor == "ale") {
//     alert("Tu código es 666")
// } else {
//     alert("No sos tutor acá")
// }

let tutor = prompt('Ingrese su nombre de tutor').toLowerCase()

while (tutor !== "esc") {
    switch (tutor) {
        case "lautaro":
            let rol = prompt('Ingrese su rol')
            switch (rol) {
                case "tutor": alert('Hola tutor ' + tutor)
                    break
                case "profe": alert('Hola PROFE ' + tutor)
                    break
                default: alert('Hola ' + tutor)
                    break
            }
            break
        case "martin":
            alert("Hola martin")
            break
        case "ale":
            alert("Hola ale")
            break
        case "carlos":
            alert("Hola carlos")
            break
        case "fran":
            alert("Hola fran")
            break
        default:
            alert("Ingresá bien tu nombre")
            break
    }

    tutor = prompt('Ingrese su nombre de tutor, o ESC para salir').toLowerCase()
}

// const banco = prompt('Ingrese su banco').toLowerCase()

// switch (banco) {
//     case "santander":
//         alert("El interés es de 21%")
//         break
//     case "macro":
//         alert("El interés es de 32%")
//         break
//     case "nacion":
//         alert("El interés es de 34400%")
//         break
//     default:
//         alert("No trabajamos con ese banco")
    
// }