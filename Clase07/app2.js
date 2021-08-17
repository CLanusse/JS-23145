//   ==== JSON ====


const obj = {
    nombre: 'Lauta',
    rol: 'tutor',
    edad: 28,
    musica: 'Topa'
}

const objToJSON = JSON.stringify( obj )

localStorage.setItem('lauta', objToJSON)



//  aplicado a un array 

const arrayProductos = [
    {id: 1, nombre: "Remera", precio: 1000},
    {id: 2, nombre: "Remera", precio: 2000},
    {id: 3, nombre: "Pantalon", precio: 1500},
    {id: 4, nombre: "Pantalon", precio: 1700},
    {id: 5, nombre: "Pantalon", precio: 5000},
    {id: 6, nombre: "Pantalon", precio: 3000},
    {id: 7, nombre: "Calzado", precio: 7000},
    {id: 8, nombre: "Calzado", precio: 8000},
    {id: 9, nombre: "Calzado", precio: 13000},
    {id: 10, nombre: "Buzo", precio: 6000},
    {id: 11, nombre: "Buzo", precio: 19000},
    {id: 12, nombre: "Buzo", precio: 800},
]

// const stockJSON = JSON.stringify( arrayProductos )
localStorage.setItem('stock', JSON.stringify(arrayProductos) )

console.log( JSON.parse( localStorage.getItem('stock') ) )



let carrito = []

const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )

if (carritoEnLS !== null) {
    carrito = carritoEnLS
}

console.log(carrito)

function agregarAlCarrito(prodId) {

    let producto = arrayProductos.find( (el) => el.id === prodId )
    carrito.push( producto )
    
   localStorage.setItem('carrito', JSON.stringify(carrito))
}

agregarAlCarrito(10)



// agregar productos al carrito

