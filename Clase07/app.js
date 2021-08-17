//  ====== STORAGE ==== 

let usuario = localStorage.getItem('usuario')

if (usuario == null) {
    usuario = prompt('Ingrese su nombre')
    localStorage.setItem('usuario', usuario)
}

alert(usuario)







localStorage.setItem("tutor", "Martin")
localStorage.setItem("tutor", "Ale")
localStorage.setItem("numeros", 12345)


const LS = localStorage.getItem('numeros')

// console.log( LS )


sessionStorage.setItem('tutor', "Carlos")

const SS = sessionStorage.getItem('tutor')

// console.log( SS )





// const saludo = prompt('Ingrese su saludo')

// // localStorage.setItem('saludo', saludo)

// sessionStorage.saludo = saludo

// for (let i = 0; i < localStorage.length; i++) {

//     let clave = localStorage.key(i)
//     console.log(clave)
//     console.log(localStorage.getItem(clave))
// }