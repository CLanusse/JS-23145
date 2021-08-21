


const titulo = document.getElementById('titulo')
const contenedor = document.getElementById('contenedor')


// let contenidoTexto = `
//     <p>Lorem, ipsum dolor<strong> sit amet consectetur adipisicing elit. Quasi culpa ad facere quisquam!" Cupiditate maiores in a," 
//     hic,</strong> similique nobis 
//     nostrum suscipit corrupti laboriosam amet delectus alias libero quos fuga.</p>`

// contenedor.innerHTML = contenidoTexto

// contenedor.className = "estilo container"

// contenedor.classList.add('row')
// contenedor.classList.remove('container')
// console.log(contenedor.id)



// contenedor.innerHTML = `
//             <div class="card" style="width: 18rem;">
//                 <img src="https://via.placeholder.com/200" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
// `

//  TABLA 

const tableBody = document.getElementById('tabla-contenedor')


// forma 1
// stockProductos.forEach((prod) => {

//     tableBody.innerHTML += `
//         <tr class="table-primary">
//             <th scope="row">${prod.id}</th>
//             <td>${prod.nombre}</td>
//             <td>${prod.tipo}</td>
//             <td>${prod.precio}</td>
//         </tr>
// // `
// })


stockProductos.forEach( (prod) => {

    const div = document.createElement('div')
    div.className = "card"
    div.style = "width: 18rem"

    div.innerHTML = `
            <img src="https://via.placeholder.com/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.desc}</p>
                <p class="card-text">Precio: $${prod.precio}</p>
                <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-primary"> Agregar al carrito </button>
            </div>
    `

    contenedor.appendChild(div)

})


const carrito = []

function agregarAlCarrito(prodId) {

    let producto = stockProductos.find( (el) => el.id === prodId )
    carrito.push( producto )
 
    mostrarCompra()
}

const mostrarCompra = () => {

    tableBody.innerHTML = ""

    carrito.forEach( (prod) => {
        const tr = document.createElement('tr')
        tr.className = "table-primary"
        tr.innerHTML = `
            <th scope="row">${prod.id}</th>
            <td>${prod.nombre}</td>
            <td>${prod.tipo}</td>
            <td>${prod.precio}</td>
            
        `
    
        tableBody.appendChild(tr)
    })
    
}
