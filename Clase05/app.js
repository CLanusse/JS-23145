//  === OBJETOS ==== 


// const nombre = 'Carlos'
// const edad = 24
// const curso = 'Javascript'
// const tel = 1155666994


//   == OBJETOS LITERALES == 
const usuario = {
    nombre: 'Carlos',
    edad: 24,
    curso: 'Javascript'
}

usuario.nombre = 'Enzo'

usuario["curso"] = 'JS'

// usuario.tel = 456456
usuario["tel"] = 123456


// console.log(usuario)


let producto1 = {
    id: 1,
    nombre: 'Remera JX',
    precio: 1600,
    talles: ['L', 'M', 'S', 'XS'],
    color: 'negro',
    otraProp: {
        otra: "otra"
    }
}

let producto2 = {
    id: 2,
    nombre: 'Remera JJ',
    precio: 2100,
    talle: 'M',
    color: 'amarillo'
}

const algo = "hoola mundo"



//  ======= CONSTRUCTORES ====== 


function Mascota(nombre, tipo, edad, id) {
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.edad = edad

    this.cumplirAnios = () => {
        this.edad += 1
    }

    this.saludar = () => {
        alert(this.nombre + " dice hola!")
    }
}


const mascota1 = new Mascota("Lautaro", "perro", 12, 1)
const mascota2 = new Mascota("Martin", "gato", 6, 2)



let id = 0

function crearMascota() {
    id++

    const nombre = prompt('Ingrese el nombre de la mascota')
    const tipo = prompt('Ingrese el tipo de mascota')
    const edad = parseInt(prompt('Ingrese la edad de la mascota'))
    

    return new Mascota(nombre, tipo, edad, id)
}

// const mascota3 = crearMascota()

// console.log(mascota3)

// mascota1.cumplirAnios()
// mascota1.cumplirAnios()
// mascota1.cumplirAnios()

// console.log(mascota1)

// mascota1.saludar()
// console.log(mascota2)

//  === CLASES === 


class Producto {

    // propiedades con el constructor
    constructor (id, nombre, precio, talle, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.talle = talle
        this.stock = stock
    }

    // aparte defino los métodos
    aumentarStock(cantidad) {
        this.stock += cantidad
    }

    restarStock(cantidad) {
        if ( (this.stock - cantidad) >= 0) {
            this.stock -= cantidad
        } else {
            alert('No hay suficiente stock')
        }
    }

    setPropiedad(propiedad, valor) {
        this[propiedad] = valor
    }
    // setNombre(nombre) {
    //     this.nombre = nombre
    // }

    // setPrecio(precio) {
    //     this.precio = precio
    // }

}


const prod1 = new Producto(1, "Remera", 800, "L", 10)
const prod2 = new Producto(2, "Buzo", 2800, "S", 10)


prod1.aumentarStock(5)
prod2.restarStock(30)

prod2.setPropiedad("nombre", "Zapas")
prod2.setPropiedad("precio", 5600)
prod2.setPropiedad("talle", 43)

console.log(prod1)
console.log(prod2)