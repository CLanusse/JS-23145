//CUMPLEAÑOS

let miEdad = 20;
// escribir una función que aumente miEdad en 1

function cumplirAnios() {
    miEdad++
}

const cumple = () => miEdad++

// console.log(miEdad)
// cumple()
// cumple()
// console.log(miEdad)


// // VIDA

let vida = 100;

// escribir una función recibirGolpe(), que reciba un parámetro tipo number
// y se reste al total vida

const recibirGolpe = (danio) => {
    vida -= danio
    if (vida < 0) { vida = 0 }
}

recibirGolpe(60)

console.log(vida)



// escribir una función curar() que regenere la vida en 50, hasta un máx de 100

const curar = () => {
    vida += 50
    if (vida > 100) { vida = 100 }
}

curar()
curar()

console.log(vida)

// escribir un condicional (if) que evalúe si el jugador sigue vivo o no

recibirGolpe(124)

if (vida === 0) {
    console.log("Estás muerto")
} else {
    console.log("Vive!")
}

