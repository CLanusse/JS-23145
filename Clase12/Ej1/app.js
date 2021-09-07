// window.addEventListener('DOMContentLoaded', ()=>{

//     setTimeout(()=>{
//         alert('Se cargó el dOM, bienvenido')
//     }, 2000)
    
// })

// $(document).ready(()=>{
//     setTimeout(()=>{
//         alert('Se cargó el dOM, bienvenido')
//     }, 2000)
// })

// $(()=>{
//     console.log("DOM cargado")
// })

// jQuery(()=>{
//     console.log("DOM cargado")
// })  

// $(document).ready(()=>{
//     $('.loader').css({
//         opacity: 0
//     })
// })

// window.addEventListener('load', () => {
//     $('.loader').css({
//         opacity: 0,
//         visibility: "hidden"
//     })
// })

// .on como remplazo de addEventListener
// $('#boton').on('click', () => {
//     alert("Hola mundo")
// })

// $('#boton').on('mouseover', () => {
//     alert("Hola mundo")
// })

const carrito = []

const productos = [
    {
        nombre: "Producto 1",
        id: 1,
        precio: 2000
    },
    {
        nombre: "Producto 2",
        id: 2,
        precio: 2000
    },
    {
        nombre: "Producto 3",
        id: 3,
        precio: 2000
    },
    {
        nombre: "Producto 4",
        id: 4,
        precio: 2000
    },
]

const agregarAlCarrito = (id) => {
    const item = productos.find( el => el.id === id)
    carrito.push(item)
    console.log(carrito)
}

productos.forEach( (prod) => {

    $('#contenedor').append(`
        <div>
            <p>#${prod.id}</p>
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button id="add${prod.id}">Agregar al carrito</button>
        </div>
    `)

    $(`#add${prod.id}`).on('click', () => {
        agregarAlCarrito(prod.id)

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito!',
            text: `Agregaste un ${prod.nombre} al carrito`
          })
    
    })

    // const boton = document.getElementById(`add${prod.id}`)
    // boton.addEventListener('click', ()=>{
    //     agregarAlCarrito(prod.id)
    // })

})