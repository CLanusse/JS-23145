// array numeros 



const numeros1 = [1, 2, 3, 4, 5]
const numeros2 = [6, 7, 8, 9, 10]


// push, pop, shift, unshift, concat

numeros1.push(6)
numeros1.unshift(0)

numeros1.pop()
numeros1.shift()

const numeros = numeros1.concat(numeros2)

// console.log(numeros)


// slice(indice inical inclusivo, indice final excluyente)

let corte = numeros.slice(2, 5)
// console.log(corte)

const texto = "hola mundo de coders!"

// console.log( texto[0].toUpperCase() + texto.slice(1))

// splice - modifica el array original
// (indice inicial, cantidad de elementos a eliminar, +elementos añadir)


// numeros.splice(1, 2)


// indexOf()


function eliminarNumero(num) {
    let indice = numeros.indexOf(num)

    if (indice !== -1) {
        numeros.splice(indice, 1)
    }
}

// eliminarNumero(6)
// eliminarNumero(2)

// console.log(numeros)



// recorrer arrays
// for of -- forEach

for (let i = 0; i < numeros.length; i++) {
        // console.log(numeros[i])
}

for (const num of numeros) {
    // console.log(num * num)
}


let acumulador = 0
numeros.forEach( (num)=>{
   acumulador += num
} )

// console.log(acumulador)


class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }

    cumplirAnios() {
        this.edad += 1
    }
}

const mascotas = []

mascotas.push( new Mascota('Flufy', 'perro', 6) )
mascotas.push( new Mascota('Dory', 'pez', 3) )
mascotas.push( new Mascota('Jorge', 'gato', 14) )
mascotas.push( new Mascota('Ricardo', 'gato', 11) )

// console.log(mascotas[1].tipo)

// recorrer arrays -- (ejecutar metodo)
mascotas.forEach( (mascota) => {
    mascota.cumplirAnios() 
})

// console.log(mascotas)

// FIND

const mascotaBuscada = mascotas.find( (mascota) => mascota.edad > 10 )

// console.log(mascotaBuscada)

// filter - map - reduce - find

const arrayProductos = [
    {nombre: "Remera", precio: 1000},
    {nombre: "Remera", precio: 2000},
    {nombre: "Pantalon", precio: 1500},
    {nombre: "Pantalon", precio: 1700},
    {nombre: "Pantalon", precio: 5000},
    {nombre: "Pantalon", precio: 3000},
    {nombre: "Calzado", precio: 7000},
    {nombre: "Calzado", precio: 8000},
    {nombre: "Calzado", precio: 13000},
    {nombre: "Buzo", precio: 6000},
    {nombre: "Buzo", precio: 19000},
    {nombre: "Buzo", precio: 800},
]

arrayProductos.push({
    nombre: "Pantalon",
    precio: 4500
})

// filter

const productosFiltrados = arrayProductos.filter( (el) => el.precio <= 5000)

// console.log(productosFiltrados)
// map

// const productosMapeados = arrayProductos.map( (el) => el.nombre)
// const productosMapeados = arrayProductos.map( (el) => el.precio)
const productosMapeados = arrayProductos.map( (el) => {

    if (el.nombre === "Pantalon") {
        return {
            nombre: el.nombre,
            precio: el.precio * 1.05
        }
    } else if (el.nombre === "Buzo") {
        return {
            nombre: el.nombre,
            precio: el.precio * 1.20
        }
    } else {
        return {
            nombre: el.nombre,
            precio: el.precio * 1.50
        }
    }
})

// console.log(productosMapeados)

// reduce

// let precioTotal = 0

// productosMapeados.forEach( (el)=> {
//     precioTotal += el.precio
// } )


const precioTotal = arrayProductos.reduce( (acumulador, el) => acumulador += el.precio, 0)

// console.log(precioTotal)

// sort

const arrayOrdenado = arrayProductos.slice().sort( (a, b) => a.precio - b.precio)

console.log(arrayProductos)
console.log(arrayOrdenado)