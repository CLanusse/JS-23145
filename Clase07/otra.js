
// const saludoDesdeLS = localStorage.getItem('saludo')

// const saludoDesdeSS = sessionStorage.saludo

// alert(saludoDesdeSS)


// sessionStorage.removeItem('saludo')


// localStorage.clear()


// const lautaEnLS = localStorage.getItem('lauta')
// const lautaParseado = JSON.parse( lautaEnLS )

// const lautaParseado = JSON.parse( localStorage.getItem('lauta') )


// console.log(lautaParseado)

// alert(lautaParseado.nombre)


//  === OBTENER CARRITO === 


let carrito = JSON.parse( localStorage.getItem('carrito') )

console.log(typeof carrito)
console.log(carrito)

carrito.forEach( (prod) => {
    console.log(prod)
})
