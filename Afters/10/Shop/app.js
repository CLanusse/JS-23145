


const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')


const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []

mostrarProductos(stockProductos)

function mostrarProductos(array) {

    contenedorProductos.innerHTML = ''

    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        
        contenedorProductos.appendChild(div)
    } )
}

function agregarAlCarrito(itemId) {

  
    let itemEnCarrito = carrito.find(el => el.id == itemId)


    if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1
    } else {
        // const producto = stockProductos.find( (el) => el.id == itemId)
        // carrito.push({id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1})

        // desestructuración de objetos
        const {id, nombre, precio} = stockProductos.find( el => el.id == itemId )
        
        carrito.push({id: id, nombre: nombre, precio: precio, cantidad: 1})
    }


    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)

    actualizarCarrito()
}

function eliminarProducto(id) {
    let productoAEliminar = carrito.find( el => el.id == id )

    productoAEliminar.cantidad--

    if (productoAEliminar.cantidad == 0) {
        let indice = carrito.indexOf(productoAEliminar)
        carrito.splice(indice, 1)
    }

    console.log(carrito)
    actualizarCarrito()
}



function actualizarCarrito() {
    contenedorCarrito.innerHTML=''

    carrito.forEach( (producto) => {

        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                        <p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio * producto.cantidad}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )
}


const selectFiltro = document.getElementById('talles')
const selectPrecios = document.getElementById('precios')


function filtrar() {
    let valorFiltroTalles = selectFiltro.value
    let valorFiltroPrecios = selectPrecios.value
    
    let arrayFiltrado = []

    if (valorFiltroTalles == 'all') {
        arrayFiltrado = stockProductos
    } else {
        arrayFiltrado = stockProductos.filter( el => el.talle == selectFiltro.value) 
    }

    if (valorFiltroPrecios == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio <= 5000)
    } else if (valorFiltroPrecios == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio >= 5000)
    }

    mostrarProductos(arrayFiltrado)

}

selectFiltro.addEventListener('change', ()=>{
    filtrar()
})
selectPrecios.addEventListener('change', ()=>{
    filtrar()
})

// desestructuración de objetos -- inmutabilidad


// let producto = stockProductos.find(el => el.id = 1)
// let {id, precio, nombre} = stockProductos.find(el => el.id = 1)

// carrito.push({id: id, precio: precio, nombre: nombre})
// // carrito.push({id: producto.id, nombre: producto.nombre, precio: producto.precio})
// // carrito.push( {...producto} )



// console.log(carrito)


// // console.log(producto)
// // console.log(carrito)
// console.log(stockProductos)