let pokemon1 = new Pokemon("Pikachu", "Electrico", 11, 5, 1);
let pokemon2 = new Pokemon("Charmander", "Fuego", 10, 4, 1);
let pokemon3 = new Pokemon("Eevee", "Normal", 6, 4, 1);

pokemon1.existir();
pokemon2.existir();
pokemon3.existir();

console.log(pokemon1.obtenerNombre);
console.log(pokemon1.obtenerTipo);

console.log(pokemon2.obtenerNombre);
console.log(pokemon2.obtenerTipo);

console.log(pokemon1.obtenerTipo);
pokemon1.cambiarTipo = "Fuego";
console.log(pokemon1.obtenerTipo);

pokemon1.atacar(pokemon2);
pokemon2.atacar(pokemon1);
pokemon1.atacar(pokemon2);
pokemon3.atacar(pokemon1);
pokemon1.atacar(pokemon3);
pokemon3.atacar(pokemon1);