//  ==== ARRAYS === 

const docentes = ["Conrado"]
const tutores = ["Martin", "Lautaro", "Fran", "Ale", "Carlos"]

const equipoCoder = tutores.concat(docentes)

// console.log(docentes)
// console.log(tutores)
// console.log(equipoCoder)


// console.log( equipoCoder.slice(1, 3) )



// console.log( [1, 2, 3, 4, 5, 6, 7, 8].slice(1, 3) )
// console.log(docentes[0][4])













// console.log( docentes.join(", ") )













// const dia = "miercoles"
// const estoNoSeHace = [1, 2, 3, 4, 5, true, false, "cosa", {nombre: 'Lauta', edad: 12}]

const numeros = [1, 2, 3, 4, 5]

// console.log(numeros)

// push agrega al final
numeros.push(6)
numeros.push(7)
numeros.push(8)

// unshift agrega al inicio
numeros.unshift(0)
numeros.unshift(-1)

// elimino al final con POP
numeros.pop()
numeros.pop()

// elimino al inicio con SHIFT
numeros.shift()

// console.log(numeros)



// console.log( docentes[6] )



// alert('La cantidad de docentes en el equipo es de ' + docentes.length)

// for (let i = 0; i < docentes.length; i++) {

//     console.log( docentes[i] )


//     // if (docentes[i] == "Lautaro") {
//     //     alert("Hola Lauti")
//     // }

// }






// == ARRAYS OBJETOS == 

function Producto(id, nombre, tipo, precio) {
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.precio = precio
}

const productos = [
    {id: 1, nombre: "Vino Toro Tinto", tipo: "vino", precio: 500},
    {id: 2, nombre: "Fernet Branca 1L", tipo: "aperitivo", precio: 800},
    {id: 3, nombre: "White Horse", tipo: "licores", precio: 780}
]

productos.push( new Producto(4, "Havana Club", "licores", 1200) )

productos.push( new Producto(5, "Johnie Walker", "licores", 4800) ) 

console.log(productos)


// console.log(productos[1]["nombre"])

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i].nombre, productos[i].precio)
// }

// for (const bebida of productos) {

//     bebida.precio *= 1.2
//     console.log( bebida.nombre, "Precio: " + bebida.precio )

// }

// FIND ========

// let buscar = prompt('Ingrese su búsqueda')

// const buscado = productos.find( (bebida) => bebida.nombre == buscar )
// const buscado2 = productos.find( (el) => el.precio > 900 )

// console.log(buscado)


//  === FILTER === 


const busqueda = productos.filter( (bebida) => bebida.tipo == "aperitivo")

const busqueda2 = productos.find( (el) => el.id === 4)

const busqueda3 = productos.filter( (el) => {
    return el.precio <= 1000 && el.tipo == "aperitivo"
})

// console.log(busqueda3)

// === MAP === 

const mapeado = productos.map( (el) => {
    return {
        id: el.id,
        nombre: el.nombre,
        precio: el.precio * 2,
        tipo: el.tipo
    }
})

// console.log(productos)
// console.log(mapeado)


let total = 0

for (const bebida of productos) {
    total += bebida.precio
}

console.log(total)

// REDUCE - forEach


productos.forEach( (el) => {

    console.log(el)
})