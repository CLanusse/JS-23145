///1 - Encontrar la temperatura más baja de los tres días

const temperaturasLunes = [16, 20, 5];
const temperaturasMartes = [9, 15, 10];
const temperaturasMiercoles = [14, 20, 8];

const temperaturas = temperaturasLunes.concat(temperaturasMartes).concat(temperaturasMiercoles)

// temperaturas.sort((a, b) => a - b)
// console.log(temperaturas[0])

// spread - min/max

// console.log(...temperaturas)
// console.log(16, 20, 5, 9, 15, 10, 14, 20, 8)

// console.log( Math.min(...temperaturas) )
// console.log( Math.max(...temperaturas) )

const promedio = temperaturas.reduce((acc, temp) => acc + temp, 0) / temperaturas.length
// console.log(promedio)



///2 - Agregar un atributo "peso" al objeto tomas

let tomas = {
  nombre: "Tomás",
  especie: "Perro",
  raza: "caniche",
  edad: 14,
};

tomas.nombre = "Martin"
tomas.peso = 8

// console.log(tomas)

///3 - Crear una clase (o función constructora) que permita crear objetos tipo Mascota con
// las mismas propiedades que tomás

class Mascota {
  constructor (nombre, especie, raza, edad, peso) {
    this.nombre = nombre
    this.especie = especie
    this.raza = raza
    this.edad = edad
    this.peso = peso
  }
}

// const mascota = new Mascota('Martin', 'pez', 'payazo', 2, 0.1)
// console.log(mascota)

// 4 .- Usando métodos de array la clase anterior creada, agregar varios objetos de tipo Mascota
// al array mascotas. Luego recorrer el array y buscar cuál es la mascota más joven, 
// y luego cuál es la más pesada

const mascotas = []

mascotas.push(new Mascota('Martin', 'pez', 'payazo', 2, 0.1))
mascotas.push(new Mascota('Lauta', 'perro', 'rottweiler', 10, 42))
mascotas.push(new Mascota('Ale', 'gato', 'siames', 5, 8))

mascotas.sort((a, b) => a.edad - b.edad)

console.log(mascotas[0])

mascotas.sort((a, b) => b.peso - a.peso)
console.log(mascotas[0])

