//  === DOM ==== 


// const titulo = document.getElementsByClassName('titulo')



const titulo = document.getElementById("titulo")
const contenedor = document.getElementById('contenedor-productos')

const items = document.getElementsByClassName('lista')

// const items = document.getElementsByTagName('li')

// const saludo = prompt('Ingrese su titulo')

titulo.innerHTML = "Hola Mundo"
titulo.className = "rojito gigante"

items[1].className = "lista rojito"

// contenedor.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus impedit cupiditate harum. Sunt laboriosam <strong>perspiciatis excepturi saepe quam</strong> dignissimos maiores possimus sint impedit expedita, cum debitis nesciunt nostrum amet sequi.</p>"



const texto = document.createElement('p')
texto.innerText = "Hola Lautaro aguante Nirvana."
texto.className = "gigante"

const rojo = document.createElement('span')
rojo.className ="rojito"
rojo.innerText = " Hola Martín vos también"


texto.appendChild(rojo)

contenedor.appendChild(texto)


// console.log(contenedor.parentElement.parentElement)

// contenedor.parentElement.remove()
// contenedor.parentElement.removeChild(contenedor)
// console.log(contenedor.children[0])
// contenedor.removeChild(texto)
texto.remove()
items[2].remove()

const input = document.getElementById('input')





const tutores = ["Martin", "Lautaro", "Ale", "Carlos", "Fran"]

const listaTutores = document.getElementById('lista-nombres')


for (const tutor of tutores) {
    
    const li = document.createElement('li')
    li.innerText = tutor

    listaTutores.appendChild(li)
}

// TEMPLATE STRINGS 

// const producto = {
//     id: 1, 
//     nombre: "Buzo 1", 
//     tipo: "buzo", 
//     desc: "Un buzo", 
//     precio: 1200, 
//     talle: "L", 
//     img: './img/buzo.jpg'
// }


// contenedor.innerText = "Nombre: " + producto.nombre + ". Precio: " + producto.precio


for (const producto of stockProductos) {

    const div = document.createElement('div')
    // div.classList.add('producto')
    div.className = "producto"
    
    div.innerHTML = `
        <img src=${producto.img} >
        <h3>${producto.nombre}</h3>
        <p>Talle: ${producto.talle}</p>
        <p>${producto.desc}</p>
        <p class="precioProducto">Precio: ${producto.precio}</p>
    `
    
    contenedor.appendChild(div)
}

